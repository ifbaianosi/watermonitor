import { Center, Heading, HStack, useRadioGroup } from "@chakra-ui/react";
import { RegisterStatusButton } from "./RegisterStatusButton";

const options = ['ABERTO', 'FECHADO']

interface RegisterStatusRadioGroupProps {
  status: boolean;
  readOnly?: boolean; 
  onChangeStatus?: (status: boolean) => void;
}

export function RegisterStatus({status, readOnly=false, onChangeStatus}: RegisterStatusRadioGroupProps) {
    const defaultValue = status ? 'ABERTO' : 'FECHADO'

    const { getRootProps, getRadioProps } = useRadioGroup({
        defaultValue: defaultValue,
        onChange: handleChangeRegisterStatus,
    })

    function handleChangeRegisterStatus(value: string) {
        const status = registerIsOpen(value)
        onChangeStatus && onChangeStatus(status)
    }

    function registerIsOpen(value: string) {
        if ('ABERTO' === value) {
        return true
        } 
        
        return false
    }

    const group = getRootProps()

    const readOnlyButton = (registerStatus: boolean) => {
        return (
            registerStatus ? (
                <Center  w='8.0625rem' h='2.625rem' bg={'registerStatusOpen'} borderRadius={'base'} border='1px' borderColor="green.500" >
                    <Heading fontWeight={'semibold'} fontSize={'md'} color='green.500'>ABERTO</Heading>
                </Center>
            ) : (
                <Center  w='8.0625rem' h='2.625rem' bg={'registerStatusClosed'} borderRadius={'base'} border='1px' borderColor="red" >
                    <Heading fontWeight={'semibold'} fontSize={'md'} color='red'>FECHADO</Heading>
                </Center>
            )
        )
    }

    const registerStatusRadioButtons = () => {
        return (
            <HStack h='3.125rem' gap={'0.25rem'} {...group} bg='background' p='0.25rem' borderRadius={'base'} border={'1px'} borderColor={'cardBorderColor'}>
                {options.map(value => {
                    const radio = getRadioProps({value})
                    return(
                    <RegisterStatusButton key={value} {...radio}>
                        {value}
                    </RegisterStatusButton>
                    )
                })}            
            </HStack>
        )
    }
  
    return (
        <>
            {readOnly ? (
                readOnlyButton(status)
            ) : (
                registerStatusRadioButtons()
            )}
        </>
    )
}