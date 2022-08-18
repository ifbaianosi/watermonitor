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
                            bg={'white'} 
                            borderRadius={'base'} 
                            textTransform='uppercase'
                            fontWeight={'semibold'}
                            cursor='pointer'
                            borderWidth='1px'
                            _checked={{
                            bg: 'green.100',
                            color: 'green.500',
                            borderColor: 'green.500',
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
                            bg={'white'} 
                            borderRadius={'base'} 
                            textTransform='uppercase'
                            fontWeight={'semibold'}
                            cursor='pointer'
                            borderWidth='1px'
                            _checked={{
                            bg: 'redAlpha200',
                            color: 'red',
                            borderColor: 'red',
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