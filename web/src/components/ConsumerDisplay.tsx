import { HStack, PinInput, PinInputField , Stack, Text } from "@chakra-ui/react";

interface ConsumerDisplayProps {
    consumer: string;
}

export function ConsumerDisplay({ consumer }: ConsumerDisplayProps) {
    return(
        <Stack>
            {/* <Text>Consumo</Text> */}
            <HStack spacing='3'>
            <PinInput defaultValue={consumer}>
                <PinInputField readOnly h='80px' w='70px' bg='background' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                <PinInputField readOnly h='80px' w='70px' bg='background' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                <PinInputField readOnly h='80px' w='70px' bg='background' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                <PinInputField readOnly h='80px' w='70px' bg='background' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                <PinInputField readOnly h='80px' w='70px' bg='background' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                <PinInputField readOnly h='80px' w='70px' bg='redAlpha' borderWidth={'1px'} borderColor='redAlpha200' textColor={'red'} fontSize={'36px'} fontWeight='semibold' />
                <PinInputField readOnly h='80px' w='70px' bg='redAlpha' borderWidth={'1px'} borderColor='redAlpha200' textColor={'red'} fontSize={'36px'} fontWeight='semibold' />
            </PinInput>
            </HStack>
        </Stack>
    );
}