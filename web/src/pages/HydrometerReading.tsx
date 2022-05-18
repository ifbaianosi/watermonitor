import { FormEvent, useEffect, useState } from "react";
import { Box, Container, FormControl, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { Skeleton } from '@chakra-ui/react'

import { ConsumerDisplay } from "../components/ConsumerDisplay";
import { Header } from "../components/Header";
import { Button } from "../components/shared/Button";
import { api } from "../services/api";
import { formatDateTime } from "../utils/format";

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

    const toast = useToast()
    const [isSubmiting, setIsSubmiting] = useState(false)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setIsSubmiting(true)

        const { data } = await api.post(`/hydrometers/${hydrometer?.id}/readings`, {
            reading
        })

        showToast()

        setIsSubmiting(false)
        setReadingIsAlreadyDone(true)
     }

    useEffect(() => {
        async function fetch() {
            const {data} = await api.get(`hydrometers/${1}`)

            setHydrometer({
                id: Number(data.hydrometer.id),
                number: data.hydrometer.number,
                display: String(data.hydrometer.display).length === 7 ? String(data.hydrometer.display) : String(`0${data.hydrometer.display}`),
                updatedAt: formatDateTime(new Date(data.hydrometer.updated_at))
            })
        }
        fetch()  
    }, [readingIsAlreadyDone])

    function showToast() {
        return(
            toast({
                title: `Leitura cadastrada`,
                description: 'Dados da leitura salvo com sucesso.',
                status: 'success',
                position: 'top',
                variant: 'left-accent',
                isClosable: true,
            })
        )
    }

    return(
        <Stack>
            <Header navigateTo="/" title="LEITURA DIÁRIA DO HIDRÔMETRO" />

            <VStack as="main">
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
                                    <Text w={'100%'}>ÚLTIMA LEITURA</Text>
                                    <Text w={'100%'} fontWeight={'medium'}>{hydrometer?.updatedAt}</Text>
                                </Skeleton>
                            </Stack>

                            <Skeleton isLoaded={!!hydrometer}>
                                <ConsumerDisplay reading={ hydrometer?.display || '0' } />
                            </Skeleton>
                        </Stack> 

                        { !readingIsAlreadyDone && ( 
                            <Box as={'form'} mt={6} onSubmit={handleSubmit} >
                                <Stack spacing={2}>
                                    <Skeleton w={'200px'} isLoaded={!!hydrometer}>
                                        {/* <Box> */}
                                            <Text>NOVA LEITURA</Text>
                                            {/* <Text fontWeight={'medium'}>{formatDateTime(Date.now())}</Text> */}
                                        {/* </Box> */}
                                    </Skeleton>

                                    <Skeleton isLoaded={!!hydrometer}>
                                        <FormControl>
                                            <ConsumerDisplay onChangeReading={setReading} readOnly={false} reading={ reading || hydrometer?.display || '0' } />
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
                                    <Button type='submit' isLoading={isSubmiting}>
                                        SALVAR LEITURA
                                    </Button>
                                )}
                            </Box>                            
                        )}                    
                    </Box>
                </Container>
            </VStack>
        </Stack>
    );
}