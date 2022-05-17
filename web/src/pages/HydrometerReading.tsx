import { FormEvent, useEffect, useState } from "react";
import { Box, Container, FormControl, FormLabel, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";

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
                title: `Dados salvo com sucesso`,
                status: 'success',
                position: 'top-right',
                variant: 'left-accent',
                isClosable: true,
            })
        )
    }

    return(
        <Stack>
            <Header title="LEITURA DIÁRIA DO HIDRÔMETRO" />

            <VStack as="main">
                <Container maxW="1120px">
                
                <Box marginTop='16' w={'544px'} mx='auto' bg={'white'} p={'8'} rounded='lg' boxShadow='md' borderWidth={'1px'} borderColor={'stroke'}>
                    
                    <Stack spacing={6}>

                    <Stack spacing={1}>
                        <Text>Número do hidrômetro</Text>
                        <Text fontWeight={'medium'}>{hydrometer?.number}</Text>
                    </Stack>

                    <Stack spacing={1}>
                        <Text>ÚLTIMA LEITURA</Text>
                        <Text fontWeight={'medium'}>{hydrometer?.updatedAt}</Text>
                    </Stack>

                    { hydrometer ? (
                        <ConsumerDisplay consumer={ hydrometer.display } />
                    ) : (
                        'carregando...'
                    )}

                    </Stack> 

                    { !readingIsAlreadyDone && (
                        <Box as={'form'} mt={6} onSubmit={handleSubmit} >
                            <Stack spacing={2}>
                                <Box>
                                    <Text>NOVA LEITURA</Text>
                                    {/* <Text fontWeight={'medium'}>{formatDateTime(Date.now())}</Text> */}
                                </Box>
                                <FormControl>
                                    {/* <FormLabel htmlFor='email'>Consumo</FormLabel> */}
                                    <Input
                                        maxLength={7}
                                        fontSize={'28px'} 
                                        name="consume" 
                                        type={'number'} 
                                        borderColor={'stroke'} 
                                        h='16' 
                                        textAlign={'right'}
                                        value={reading}
                                        onChange={(event) => setReading(event.currentTarget.value)}
                                    />
                                    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                                </FormControl>
                            </Stack>

                            <Button type='submit' isLoading={isSubmiting} disabled={reading.length === 0}>
                                SALVAR LEITURA
                            </Button>
                        </Box>
                    )}
                    
                </Box>

                </Container>
            </VStack>

            </Stack>
    );
}