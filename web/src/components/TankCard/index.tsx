import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { RegistrationStatus } from "./RegistrationStatus";
import { WaterLevel } from "./WaterLevel";

import registrationStatusImg from '../../assets/registration-status.svg'
import waterLevelImg from '../../assets/water-level.svg'

export function TankCard() {
    return(
        <Box borderRadius={'lg'} bg={'white'} w='22rem' pt='12' pb='10' px='8' boxShadow='md' border='1px' borderColor='stroke'>
            <Stack spacing='1'>
                <Text>Reservatório</Text>
                <Heading fontSize='xl' fontWeight='semibold'>TANQUE AZUL - RESIDÊNCIA</Heading>
            </Stack>
            <Flex mt='8' gap='2'>
                <Image
                    src={registrationStatusImg}
                    alt='Situação do registro'
                />
                <Stack>
                    <Text>Situaçao do resgistro</Text>
                    <RegistrationStatus />
                </Stack>
            </Flex>
            <Flex mt='6' gap='2'>
                <Image
                    src={waterLevelImg}
                    alt='Nível da água'
                />
                <Stack>
                    <Text>Nível da água</Text>
                    <WaterLevel />
                </Stack>
            </Flex>
        </Box>
    )
}