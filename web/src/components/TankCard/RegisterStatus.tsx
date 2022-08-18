import { Center, Heading } from "@chakra-ui/react";
import { RegisterStatusRadioGroup } from "./RegisterStatusRadioGroup";

interface RegisterStatusProps {
    status: boolean;
    readOnly?: boolean;    
    onChangeStatus: (registerStatus: boolean) => void;
}

export function RegisterStatus({ status, readOnly=false, onChangeStatus }: RegisterStatusProps) {

    const registerStatus = status ? 'ABERTO' : 'FECHADO';

    return(
        readOnly ? (
            status ? (
                <Center  w='8.0625rem' h='2.625rem' bg={'green.100'} borderRadius={'base'} border='1px' borderColor="green.500" >
                    <Heading fontWeight={'semibold'} fontSize={'md'} color='green.500'>{registerStatus}</Heading>
                </Center>
            ) : (
                <Center  w='8.0625rem' h='2.625rem' bg={'redAlpha200'} borderRadius={'base'} border='1px' borderColor="red" >
                    <Heading fontWeight={'semibold'} fontSize={'md'} color='red'>{registerStatus}</Heading>
                </Center>
            )
        ) : (
            <RegisterStatusRadioGroup onChangeStatus={onChangeStatus} isOpen={status} />
        )
    )
}