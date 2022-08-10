import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { RegisterStatus } from "./RegisterStatus";

import registerStatusImg from '../../assets/registration-status.svg'
import waterLevelImg from '../../assets/water-level.svg'

import { Tank } from "../../pages/Home";
import { WaterLevel } from "./WaterLevel";

const REGISTER_STATUS_DEFAULT_VALUE = false

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
                        src={registerStatusImg}
                        alt='Situação do registro'
                    />
                    <Text>Situaçao do resgistro</Text>
                </Flex>
                <RegisterStatus status={tank.lastDailyControl?.registerStatus || REGISTER_STATUS_DEFAULT_VALUE} />
            </Stack>
            <Stack mt='6' gap='2'>
                <Flex align={'center'} gap={'0.5rem'}>
                    <Image
                        src={waterLevelImg}
                        alt='Nível da água'
                    />
                    <Text>Nível da água</Text>    
                </Flex>               
                <WaterLevel level={tank.lastDailyControl?.waterLevel || 'CHEIO'} />
            </Stack>
        </Box>
    )
}