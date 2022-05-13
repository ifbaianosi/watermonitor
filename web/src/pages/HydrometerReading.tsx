import { useState } from "react";
import { Box, Container, FormControl, FormLabel, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";

import { ConsumerDisplay } from "../components/ConsumerDisplay";
import { Header } from "../components/Header";
import { Button } from "../components/shared/Button";
import { api } from "../services/api";

export function HydrometerReading() {
    const toast = useToast()
    const [isSubmiting, setIsSubmiting] = useState(false)

    async function handleSubmit() {
        setIsSubmiting(true)

        await api.post('/readings', {
            data: 'tete'
        })

        await new Promise(resolve => setTimeout(resolve, 2000))

        toast({
        title: `Dados salvo com sucesso`,
        status: 'success',
        position: 'top-right',
        variant: 'left-accent',
        isClosable: true,
        })

        setIsSubmiting(false)
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
                        <Text fontWeight={'medium'}>152486522554</Text>
                    </Stack>

                    <Stack spacing={1}>
                        <Text>LEITURA ANTERIOR</Text>
                        <Text fontWeight={'medium'}>27/04/2022 18:00</Text>
                    </Stack>

                    <ConsumerDisplay consumer={3446455} />

                    <Stack spacing={2}>
                        <Text>LEITURA ATUAL</Text>
                        <FormControl>
                        <FormLabel htmlFor='email'>Consumo</FormLabel>
                        <Input fontSize={'28px'} name="consume" type={'number'} borderColor={'stroke'} h='16' textAlign={'right'} />
                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                        </FormControl>
                    </Stack>

                    </Stack>

                    <Button onSubmit={handleSubmit} isLoading={isSubmiting}>
                        SALVAR LEITURA
                    </Button>

                </Box>

                </Container>
            </VStack>

            </Stack>
    );
}