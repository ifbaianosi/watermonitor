import { HStack, PinInput, PinInputField , Stack } from "@chakra-ui/react";

interface ConsumerDisplayProps {
    reading: string;
    readOnly?: boolean;
    onChangeReading?: (value: string) => void; 
}

export function ConsumerDisplay({ reading, readOnly = true, onChangeReading }: ConsumerDisplayProps) {

    function onChange(value: string) {
        if (onChangeReading) {
            console.log(value)
            onChangeReading(value)
        }
    }

    return(
        <Stack>
            {/* <Text>Consumo</Text> */}
            <HStack spacing='3'>
                <PinInput value={reading} onChange={onChange} >
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', textColor: 'blackAlpha.600'}} readOnly={readOnly} h='80px' w='70px' bg='white' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', textColor: 'blackAlpha.600'}} readOnly={readOnly} h='80px' w='70px' bg='white' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', textColor: 'blackAlpha.600'}} readOnly={readOnly} h='80px' w='70px' bg='white' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', textColor: 'blackAlpha.600'}} readOnly={readOnly} h='80px' w='70px' bg='white' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', textColor: 'blackAlpha.600'}} readOnly={readOnly} h='80px' w='70px' bg='white' borderWidth={'1px'} borderColor='stroke' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', borderColor: 'stroke', textColor: 'blackAlpha.600'}} readOnly={readOnly} h='80px' w='70px' bg='redAlpha' borderWidth={'1px'} borderColor='redAlpha200' textColor='red' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', borderColor: 'stroke', textColor: 'blackAlpha.600'}} readOnly={readOnly} h='80px' w='70px' bg='redAlpha' borderWidth={'1px'} borderColor='redAlpha200' textColor='red' fontSize={'36px'} fontWeight='semibold' />
                </PinInput>
            </HStack>
        </Stack>
    );
}