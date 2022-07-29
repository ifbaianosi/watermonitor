import { Center, Flex, Heading } from "@chakra-ui/react";

interface WaterLevelProps {
    level: string
    readOnly?: boolean;
}

export function WaterLevel({level, readOnly=false}: WaterLevelProps) {
    return(
        renderComponent(level)
    );

    function renderComponent(level: string) {
        if (readOnly) {
            switch (level) {
                case 'EMPTY':
                    return (
                        <Center px={'3'} h={'1.75rem'} bg={'hsla(358, 85%, 52%, 1)'} borderRadius={'lg'}>
                            <Heading textTransform={'uppercase'} fontWeight={'semibold'} fontSize={'0.9375rem'} color={'white'}>Vazio</Heading>
                        </Center>
                    )
                    
                case 'LOW':
                    return (
                        <Center px={'3'} h={'1.75rem'} bg={'hsla(42, 98%, 53%, 1)'} borderRadius={'lg'}>
                            <Heading textTransform={'uppercase'} fontWeight={'semibold'} fontSize={'0.9375rem'} color={'white'}>Abaixo do meio</Heading>
                        </Center>
                    )
    
                case 'MIDDLE':
                    return (
                        <Center px={'3'} h={'1.75rem'} bg={'hsla(57, 100%, 39%, 0.9)'} borderRadius={'lg'}>
                            <Heading textTransform={'uppercase'} fontWeight={'semibold'} fontSize={'0.9375rem'} color={'white'}>Pelo meio</Heading>
                        </Center>
                    )
    
                case 'ALMOST_FULL':
                    return (
                        <Center px={'3'} h={'1.75rem'} bg={' hsla(69, 67%, 51%, 1)'} borderRadius={'lg'}>
                            <Heading textTransform={'uppercase'} fontWeight={'semibold'} fontSize={'0.9375rem'} color={'white'}>Acima do meio</Heading>
                        </Center>
                    )
    
                case 'FULL':
                    return (
                        <Center px={'3'} h={'1.75rem'} bg={'hsla(149, 100%, 33%, 0.8)'} borderRadius={'lg'}>
                            <Heading textTransform={'uppercase'} fontWeight={'semibold'} fontSize={'0.9375rem'} color={'white'}>Cheio</Heading>
                        </Center>
                    )
    
                default:
                    return <></>

            }
        } else {
            return(
                <Flex wrap={'wrap'} rowGap={'0.75rem'} columnGap={'0.9375rem'}>
                    <Center px={'3'} h={'1.75rem'} bg={'hsla(149, 100%, 33%, 0.8)'} borderRadius={'lg'}>
                        <Heading textTransform={'uppercase'} fontWeight={'semibold'} fontSize={'0.9375rem'} color={'white'}>Cheio</Heading>
                    </Center>
                    <Center px={'3'} h={'1.75rem'} bg={' hsla(69, 67%, 51%, 1)'} borderRadius={'lg'}>
                        <Heading textTransform={'uppercase'} fontWeight={'semibold'} fontSize={'0.9375rem'} color={'white'}>Acima do meio</Heading>
                    </Center>
                    <Center px={'3'} h={'1.75rem'} bg={'hsla(57, 100%, 39%, 0.9)'} borderRadius={'lg'}>
                        <Heading textTransform={'uppercase'} fontWeight={'semibold'} fontSize={'0.9375rem'} color={'white'}>Pelo meio</Heading>
                    </Center>
                    <Center px={'3'} h={'1.75rem'} bg={'hsla(42, 98%, 53%, 1)'} borderRadius={'lg'}>
                        <Heading textTransform={'uppercase'} fontWeight={'semibold'} fontSize={'0.9375rem'} color={'white'}>Abaixo do meio</Heading>
                    </Center>
                    <Center px={'3'} h={'1.75rem'} bg={'hsla(358, 85%, 52%, 1)'} borderRadius={'lg'}>
                        <Heading textTransform={'uppercase'} fontWeight={'semibold'} fontSize={'0.9375rem'} color={'white'}>Vazio</Heading>
                    </Center>
                </Flex>
            )
        }
    }
}