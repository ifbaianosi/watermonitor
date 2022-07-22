import { Center, Heading } from "@chakra-ui/react";

interface WaterLevelProps {
    level: string
}

export function WaterLevel({level}: WaterLevelProps) {


    return(
        renderIcon(level)
    );

    function renderIcon(level: string) {
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
    }
}