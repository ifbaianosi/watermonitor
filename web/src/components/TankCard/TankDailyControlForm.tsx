import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { RegisterStatus } from "./RegisterStatus";
import { WaterLevel } from "./WaterLevel";

import registrationStatusImg from '../../assets/registration-status.svg'
import waterLevelImg from '../../assets/water-level.svg'

import { Tank } from "../../pages/Home";

interface TankCardProps {
    tank: Tank;
}

export function TankDailyControlForm({tank}: TankCardProps) {
    return(
        <Box borderRadius={'lg'} bg={'white'} w='22rem' h={'558px'} pt='12' pb='10' px='8' boxShadow='md' border='1px' borderColor='stroke' >
            <Stack spacing='1'>
                <Text>Reservatório</Text>
                <Heading fontSize='xl' fontWeight='semibold' textTransform={'uppercase'}>{tank.name}</Heading>
            </Stack>
            <Stack mt='8' gap='0.5rem'>
                <Flex gap={'0.25rem'}>
                    <Image
                        src={registrationStatusImg}
                        alt='Situação do registro'
                    />
                    <Text>Situaçao do resgistro</Text>
                </Flex>
                <RegisterStatus status={tank.registerStatus} />
            </Stack>
            <Flex mt='6' gap='2'>
                <Image
                    src={waterLevelImg}
                    alt='Nível da água'
                />
                <Stack>
                    <Text>Nível da água</Text>                    
                    <WaterLevel level={tank.waterLevel} />
                </Stack>
            </Flex>
        </Box>
    )
}