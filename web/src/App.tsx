import { Box, Button, HStack, Icon, Input, PinInput, PinInputField , Stack, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

import { Header } from './components/Header'


function App() {

  const toast = useToast()

  const [isSubmiting, setIsSubmiting] = useState(false)

  async function handleSubmit() {
    setIsSubmiting(true)
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

  return (
    <Stack>
      <Header title="LEITURA DIÁRIA DO HIDRÔMETRO" />

      <Box mt='0' as="main" w={'100vw'}>
        <Box maxWidth="1120px" mx="auto" px={'6'}>
          
          <Box marginTop='16' w={'544px'} mx='auto' bg={'white'} p={'8'} rounded='lg' boxShadow='md' borderWidth={'1px'} borderColor={'stroke'}>
            <Stack spacing={'6'}>
              <Stack spacing={'1'}>
                <Text>Número do hidrômetro</Text>
                <Text fontWeight={'medium'}>152486522554</Text>
              </Stack>

              <Stack spacing={6}>
                <Stack spacing={1}>
                  <Text>LEITURA ANTERIOR</Text>
                  <Text fontWeight={'medium'}>27/04/2022 18:00</Text>
                </Stack>

                <Stack>
                  <Text>Consumo</Text>
                  <HStack spacing='3'>
                    <PinInput defaultValue='354555'>
                      <PinInputField readOnly h='80px' w='70px' bg='background' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                      <PinInputField readOnly h='80px' w='70px' bg='background' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                      <PinInputField readOnly h='80px' w='70px' bg='background' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                      <PinInputField readOnly h='80px' w='70px' bg='background' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                      <PinInputField readOnly h='80px' w='70px' bg='redAlpha' borderWidth={'1px'} borderColor='redAlpha200' textColor={'red'} fontSize={'36px'} fontWeight='semibold' />
                      <PinInputField readOnly h='80px' w='70px' bg='redAlpha' borderWidth={'1px'} borderColor='redAlpha200' textColor={'red'} fontSize={'36px'} fontWeight='semibold' />
                    </PinInput>
                  </HStack>
                </Stack>

                <Stack spacing={2}>
                  <Text>LEITURA ATUAL</Text>
                  <Text>Consumo</Text>
                  <Input fontSize={'28px'} name="consume" type={'number'} borderColor={'stroke'} h='16' textAlign={'right'} />
                </Stack>

              </Stack>
            </Stack>

            <Button onClick={handleSubmit} isLoading={isSubmiting} loadingText='Aguarde' mt={'8'} h={'12'} bg={'brand.blue'} textColor={'white'} fontSize="15px" _hover={{opacity: '0.8'}}>
              <Icon as={FiCheck} fontSize="20" mr={'3'} />
              SALVAR LEITURA
            </Button>

          </Box>

        </Box>
      </Box>

    </Stack>
  )
}

export default App
