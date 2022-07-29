import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { RegisterStatus } from "./RegisterStatus";
import { WaterLevel } from "./WaterLevel";

import registrationStatusImg from '../../assets/registration-status.svg'
import waterLevelImg from '../../assets/water-level.svg'
import { Tank } from "../../pages/Home";

interface TankCardProps {
    tank: Tank;
}

export function TankCard( { tank }: TankCardProps ) {
    return(
        <Box borderRadius={'lg'} bg={'white'} w='22rem' pt='12' pb='10' px='8' boxShadow='md' border='1px' borderColor='stroke' >
            <Stack spacing='1'>
                <Text>Reservatório</Text>
                <Heading fontSize='xl' fontWeight='semibold' textTransform={'uppercase'}>{tank.name}</Heading>
            </Stack>
            <Flex mt='8' gap='2' align={'flex-start'}>
                <Image
                    src={registrationStatusImg}
                    alt='Situação do registro'
                />
                <Stack gap={'0.5rem'}>
                    <Text>Situaçao do resgistro</Text>
                    {tank.lastDailyControl ? (
                        <RegisterStatus status={tank.lastDailyControl.registerStatus} readOnly={true} />
                    ) : (
                        <Text fontSize={'0.75rem'} color={'gray.400'}>Dados não encontrado</Text>
                    )}
                    
                </Stack>
            </Flex>
            <Flex mt='6' gap='2'>
                <Image
                    src={waterLevelImg}
                    alt='Nível da água'
                />
                <Stack>
                    <Text>Nível da água</Text>
                    {tank.lastDailyControl ? (
                        <WaterLevel level={tank.lastDailyControl.waterLevel} readOnly={true} />
                    ) : (
                        <Text fontSize={'0.75rem'} color={'gray.400'}>Dados não encontrado</Text>
                    )}                  
                </Stack>
            </Flex>
        </Box>
    )
}