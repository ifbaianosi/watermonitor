import { Center, Flex, useRadio } from "@chakra-ui/react";

export function RegisterStatusButton(props: any) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    function buttons(type: 'ABERTO' | 'FECHADO') {
        switch (type) {
            case 'ABERTO':
                return(
                    <Flex as='label' w='100%' h='100%' >
                        <input {...input} name='registerStatus' />
                        <Center 
                            {...checkbox} 
                            w='100%'                          
                            h='100%' 
                            bg={'card'} 
                            borderRadius={'base'} 
                            textTransform='uppercase'
                            fontWeight={'semibold'}
                            cursor='pointer'
                            borderWidth='1px'
                            _hover={{
                                color: 'green.500'
                            }}
                            _checked={{
                                bg: 'registerStatusOpen',
                                color: 'green.500',
                                borderColor: 'registerStatusOpen'
                            }}
                            _focus={{
                                boxShadow: 'outline',
                            }}
                        >
                            {props.children}
                        </Center>
                    </Flex>
                )

            case 'FECHADO':
                return(
                    <Flex as='label' w='100%' h='100%'>
                        <input {...input} name='registerStatus' />
                        <Center 
                            {...checkbox}                            
                            w='100%'                          
                            h='100%'  
                            bg={'card'} 
                            borderRadius={'base'} 
                            textTransform='uppercase'
                            fontWeight={'semibold'}
                            cursor='pointer'
                            borderWidth='1px'
                            _hover={{
                                color: 'danger'
                            }}
                            _checked={{
                                bg: 'registerStatusClosed',
                                color: 'danger',
                                borderColor: 'registerStatusClosed'
                            }}
                            _focus={{
                                boxShadow: 'outline',
                            }}
                        >
                            {props.children}
                        </Center>
                    </Flex>
                )
        
            default:
                return null;
        }
    }

    return(
        buttons(props.children)
    )
}