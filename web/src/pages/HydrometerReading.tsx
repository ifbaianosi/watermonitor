import { FormEvent, useEffect, useState } from "react";
import { Box, Container, FormControl, Stack, Text, useDisclosure, useToast, VStack, HStack, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Flex, Alert, AlertIcon, Icon, FormErrorMessage } from "@chakra-ui/react";
import { Skeleton } from '@chakra-ui/react'

import { FiChevronRight } from "react-icons/fi";

import { ConsumerDisplay } from "../components/ConsumerDisplay";
import { Header } from "../components/Header";
import { Button } from "../components/shared/Button";
import { api } from "../services/api";
import { formatDateTime } from "../utils/format";
import { ModalReadConfirmation } from "../components/ModalReadConfirmation";

interface Hydrometer {
    id: number;
    number: string;
    display: string;
    updatedAt: string;
}

export function HydrometerReading() {
    const [hydrometer, setHydrometer] = useState<Hydrometer | undefined>()
    const [reading, setReading] = useState('')
    const [readingIsAlreadyDone, setReadingIsAlreadyDone] = useState(false)

    const [readingFormIsInvalid, setReadingFormIsInvalid] = useState(false)

    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure() 
    const [isSubmiting, setIsSubmiting] = useState(false)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        setIsSubmiting(true)

        const { data } = await api.post(`/hydrometers/${hydrometer?.id}/readings`, {
            reading
        })

        showToast()
        onClose()
        setIsSubmiting(false)
        setReadingIsAlreadyDone(true)
    }

    function handleOpenModalReadingDataConfirmation(event: FormEvent) {
        event.preventDefault()
        setReadingFormIsInvalid(false)

        if (Number(reading) <= Number(hydrometer?.display)) {
            setReadingFormIsInvalid(true)
        } else {
            onOpen()
        }

    }

    useEffect(() => {
        async function fetch() {
            const {data} = await api.get(`hydrometers/${1}`)

            setHydrometer({
                id: Number(data.id),
                number: data.number,
                display: String(data.display).length === 7 ? String(data.display) : String(`0${data.display}`),
                updatedAt: formatDateTime(new Date(data.updatedAt))
            })
        }

        fetch()  
    }, [readingIsAlreadyDone])

    return(
        <>        
        <Stack>
            <Header navigateTo="/" title="LEITURA DO HIDRÔMETRO" />

            <VStack as="main" >
                <Container maxW="1120px">                
                    <Box marginTop='16' w={'544px'} mx='auto' bg={'white'} p={'8'} rounded='lg' boxShadow='md' borderWidth={'1px'} borderColor={'stroke'}>                    
                        <Stack spacing={6}>
                            <Stack spacing={1}>
                                <Skeleton w={'200px'} isLoaded={!!hydrometer} >
                                    <Text  >Número do hidrômetro</Text>   
                                    <Text fontWeight={'semibold'}>{hydrometer?.number}</Text>
                                </Skeleton>
                            </Stack>

                            <Stack spacing={1}>
                                <Skeleton w={'200px'} isLoaded={!!hydrometer} >
                                    <Text w={'100%'}>Última leitura</Text>
                                    <Text w={'100%'} fontWeight={'semibold'}>{hydrometer?.updatedAt}</Text>
                                </Skeleton>
                            </Stack>

                            <Skeleton isLoaded={!!hydrometer}>
                                <ConsumerDisplay reading={ hydrometer?.display || '0' } />
                            </Skeleton>
                        </Stack> 

                        { !readingIsAlreadyDone && ( 
                            <Box as={'form'} mt={6} onSubmit={handleOpenModalReadingDataConfirmation} >
                                <Stack spacing={2}>
                                    <Skeleton w={'200px'} isLoaded={!!hydrometer}>
                                        <Text>Nova leitura</Text>
                                    </Skeleton>

                                    <Skeleton isLoaded={!!hydrometer}>
                                        <FormControl isInvalid={readingFormIsInvalid}>
                                            <ConsumerDisplay onChangeReading={setReading} readOnly={false} reading={ reading || hydrometer?.display || '0' } />

                                            { readingFormIsInvalid && (
                                                <Alert status='warning' mt={'4'}>
                                                    <AlertIcon />
                                                    A nova leitura deve ser maior que a leitura anterior.
                                                </Alert>
                                            )}
                                        </FormControl>
                                    </Skeleton>
                                </Stack>

                                { !!hydrometer && (
                                    <Button type="submit" mt={'8'}>
                                        Registrar leitura
                                        <Icon as={FiChevronRight} fontSize="24" ml={'6'} />
                                    </Button>
                                )}
                            </Box>                            
                        )}                    
                    </Box>
                </Container>
            </VStack>
        </Stack>

        <ModalReadConfirmation 
            isOpen={isOpen} 
            onClose={onClose} 
            isSubmiting={isSubmiting} 
            onSubmit={handleSubmit} 
            dataConfirmation={
                {
                    display: hydrometer?.display || '',
                    reading: reading,
                    consumo: `${(Number(reading) - Number(hydrometer?.display))} (m³)`,
                }
            }
        />
    </>
    );    

    function showToast() {
        toast({
            title: `Sucesso`,
            description: 'Dados da leitura salvo com sucesso.',
            status: 'success',
            position: 'top-right',
            variant: 'left-accent',
            isClosable: true,
        })
    }
}