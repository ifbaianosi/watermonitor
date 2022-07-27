import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { RegisterStatusRadioGroup } from "./RegisterStatusRadioGroup";

interface RegisterStatusProps {
    status: boolean;
    readOnly?: boolean;
}

export function RegisterStatus({ status, readOnly=false }: RegisterStatusProps) {

    const registerStatus = status ? 'ABERTO' : 'FECHADO';
    console.log("readOnly: "+ readOnly);

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
            <RegisterStatusRadioGroup isOpen={status} />
        )
    )
}