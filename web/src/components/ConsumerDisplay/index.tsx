import { HStack, PinInput, PinInputField , Stack } from "@chakra-ui/react";

interface ConsumerDisplayProps {
    reading: string;
    readOnly?: boolean;
    onChangeReading?: (value: string) => void; 
}

export function ConsumerDisplay({ reading, readOnly = true, onChangeReading }: ConsumerDisplayProps) {

    function configDisplayValueReading(reading: string) {
        const amountFromZeroToTheLeft = 7 - reading.length
        
        let readingWithZeroLeft = ''

        for (let index = 0; index < amountFromZeroToTheLeft; index++) {
            readingWithZeroLeft += '0'
        }

        return readingWithZeroLeft + reading
    }

    const readingWithZeroLeft = configDisplayValueReading(reading)

    const valueReading = reading.length === 7 ? reading : readingWithZeroLeft

    function onChange(value: string) {
        if (onChangeReading) {
            onChangeReading(value)
        }
    }

    return(
        <Stack>
            {/* <Text>Consumo</Text> */}
            <HStack spacing='3'>
                <PinInput value={valueReading} onChange={onChange} >
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', textColor: 'text', opacity: '0.7'}} readOnly={readOnly} h='80px' w='70px' bg='background' color={'title'} borderWidth={'1px'} borderColor='cardBorderColor' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', textColor: 'text', opacity: '0.7'}} readOnly={readOnly} h='80px' w='70px' bg='background' color={'title'} borderWidth={'1px'} borderColor='cardBorderColor' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', textColor: 'text', opacity: '0.7'}} readOnly={readOnly} h='80px' w='70px' bg='background' color={'title'} borderWidth={'1px'} borderColor='cardBorderColor' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', textColor: 'text', opacity: '0.7'}} readOnly={readOnly} h='80px' w='70px' bg='background' color={'title'} borderWidth={'1px'} borderColor='cardBorderColor' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', textColor: 'text', opacity: '0.7'}} readOnly={readOnly} h='80px' w='70px' bg='background' color={'title'} borderWidth={'1px'} borderColor='cardBorderColor' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', borderColor: 'registerStatusClosed', textColor: 'red', opacity: '0.7'}} readOnly={readOnly} h='80px' w='70px' bg='registerStatusClosed' borderWidth={'1px'} borderColor='registerStatusClosed' textColor='red' fontSize={'36px'} fontWeight='semibold' />
                    <PinInputField _readOnly={{bg: 'background', cursor: 'not-allowed', borderColor: 'registerStatusClosed', textColor: 'red', opacity: '0.7'}} readOnly={readOnly} h='80px' w='70px' bg='registerStatusClosed' borderWidth={'1px'} borderColor='registerStatusClosed' textColor='red' fontSize={'36px'} fontWeight='semibold' />
                </PinInput>
            </HStack>
        </Stack>
    );
}