import { FormEvent, useEffect, useState } from "react";
import { Button as ChakraButton, Box, Container, FormControl, Stack, Text, useDisclosure, useToast, VStack, HStack, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Flex, Alert, AlertIcon, Icon, FormErrorMessage } from "@chakra-ui/react";
import { Skeleton } from '@chakra-ui/react'

import { FiChevronRight } from "react-icons/fi";

import { ConsumerDisplay } from "../components/ConsumerDisplay";
import { Header } from "../components/Header";
import { Button } from "../components/shared/Button";
import { api } from "../services/api";
import { formatDateTime } from "../utils/format";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

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
                id: Number(data.hydrometer.id),
                number: data.hydrometer.number,
                display: String(data.hydrometer.display).length === 7 ? String(data.hydrometer.display) : String(`0${data.hydrometer.display}`),
                updatedAt: formatDateTime(new Date(data.hydrometer.updatedAt))
            })
        }

        fetch()  
    }, [readingIsAlreadyDone])

    function showToast() {
        return(
            toast({
                title: `Sucesso`,
                description: 'Dados da leitura salvo com sucesso.',
                status: 'success',
                position: 'top-right',
                variant: 'left-accent',
                isClosable: true,
            })
        )
    }

    return(
        <>
        
        <Stack>
            <Header navigateTo="/" title="LEITURA DO HIDRÔMETRO" />

            <VStack as="main"  _dark={{bg: 'gray.900'}}>
                <Container maxW="1120px">                
                    <Box marginTop='16' w={'544px'} mx='auto' bg={'white'} p={'8'} rounded='lg' boxShadow='md' borderWidth={'1px'} borderColor={'stroke'}>                    
                        <Stack spacing={6}>
                            <Stack spacing={1}>
                                <Skeleton w={'200px'} isLoaded={!!hydrometer} >
                                    <Text >Número do hidrômetro</Text>   
                                    <Text fontWeight={'medium'}>{hydrometer?.number}</Text>
                                </Skeleton>
                            </Stack>

                            <Stack spacing={1}>
                                <Skeleton w={'200px'} isLoaded={!!hydrometer} >
                                    <Text w={'100%'}>Última leitura</Text>
                                    <Text w={'100%'} fontWeight={'medium'}>{hydrometer?.updatedAt}</Text>
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
                                            {/* <FormLabel htmlFor='email'>Consumo</FormLabel> */}
                                            {/* <Input
                                                maxLength={7}
                                                fontSize={'28px'} 
                                                name="consume" 
                                                type={'number'} 
                                                borderColor={'stroke'} 
                                                h='16' 
                                                textAlign={'right'}
                                                value={reading}
                                                onChange={(event) => setReading(event.currentTarget.value)}
                                            /> */}
                                            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
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

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Confirmação</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Alert status='warning' mb={'4'}>
                <AlertIcon />
                Confirme os dados da leitura.
            </Alert>
            <TableContainer mb={'4'}>
                <Table variant='simple'>
                    <Tbody>
                        <Tr>
                            <Td>Leitura anterior</Td>
                            <Td fontSize={'xl'} fontWeight={'medium'}>{ hydrometer?.display }</Td>
                        </Tr>
                        <Tr>
                            <Td>Leitura de hoje</Td>
                            <Td fontSize={'xl'} fontWeight={'medium'}>{ reading }</Td>
                        </Tr>
                        <Tr>
                            <Td>Consumo</Td>
                            <Td fontSize={'xl'} fontWeight={'medium'}>{ `${(Number(reading) - Number(hydrometer?.display))} (m³)` }</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            </ModalBody>

            <ModalFooter justifyContent={'flex-start'}>
                <Button bg={'brand.blue'} textColor={'white'} fontSize="15px" _hover={{opacity: '0.8'}} mr={3} isLoading={isSubmiting} onClick={handleSubmit}>
                    Confirmar leitura
                </Button>
                <ChakraButton variant='ghost' h={'12'} onClick={onClose}>
                    Revisar leitura
                </ChakraButton>
            </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    );
}