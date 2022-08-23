import { Box, Flex, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

import registerStatusImg from '../../assets/registration-status.svg'
import waterLevelImg from '../../assets/water-level.svg'

import { Tank, DailyControlInput, WaterLevelType, DailyControl } from "../../types";
import { WaterLevel } from "../WaterLevel";
import { useState } from "react";
import { Button } from "../shared/Button";
import { api } from "../../services/api";
import { formatDateTime } from "../../utils/format";
import { RegisterStatus } from "../RegisterStatus";
import { Icon } from "../shared/Icon";

const REGISTER_STATUS_DEFAULT_VALUE = false

interface TankCardProps {
    tank: Tank;
}

export function TankDailyControlForm({ tank }: TankCardProps) {

    let tankDailyControl = null

    if (tank.lastDailyControl) {
        tankDailyControl = {
            createdAt: tank.lastDailyControl.date,
            registerStatus: tank.lastDailyControl.registerStatus,
            waterLevel: tank.lastDailyControl.waterLevel
        }
    }

    const [lastDailyControl, setLastDailyControl] = useState<DailyControl | null>(tankDailyControl)

    let [isSubmiting, setIsSubmiting] = useState(false);


    const [tankDailyControlInput, setTankDailyControlInput] = useState<DailyControlInput>({
        tankId: tank.id,
        registerStatus: tank.lastDailyControl ? tank.lastDailyControl.registerStatus : false,
        waterLevel: tank.lastDailyControl ? tank.lastDailyControl.waterLevel : 'FULL'
    })

    function handleChangeRegisterStatus(registerStatus: boolean) {
        const changedTankDailyControlInput = {
            tankId: tank.id,
            registerStatus,
            waterLevel: tankDailyControlInput.waterLevel
        }

        setTankDailyControlInput({...changedTankDailyControlInput})
    }

    function handleChangeWaterLevel(waterLevel: WaterLevelType) {
        const changedTankDailyControlInput = {
            tankId: tank.id,
            registerStatus: tankDailyControlInput.registerStatus,
            waterLevel
        }

        setTankDailyControlInput({...changedTankDailyControlInput})   
    }

    async function handleSubmit() {
        setIsSubmiting(true)

        const tankId = tankDailyControlInput.tankId

        const response = await api.post(`/tanks/${tankId}/daily-controls`, {
            registerStatus: tankDailyControlInput.registerStatus,
            waterLevel: tankDailyControlInput.waterLevel
        })

        setLastDailyControl(response.data)
        setIsSubmiting(false)
    }

    return(
        <Box borderRadius={'lg'} bg={'card'} w={'22rem'} pt='12' px='6' boxShadow='md' border='1px' borderColor='cardBorderColor' >
            <Stack spacing='1'>
                <Text>Reservatório</Text>
                <Heading color={'title'} fontSize='xl' fontWeight='semibold' textTransform={'uppercase'}>{tank.name}</Heading>
            </Stack>
            <Stack mt='8' gap='0.5rem'>
                <Flex gap={'0.25rem'}>
                    {/* <Image
                        src={registerStatusImg}
                        alt='Situação do registro'
                    /> */}
                    <Icon iconName="REGISTER_STATUS" />
                    <Text>Situaçao do resgistro</Text>
                </Flex>
                <RegisterStatus onChangeStatus={handleChangeRegisterStatus} status={tank.lastDailyControl?.registerStatus || REGISTER_STATUS_DEFAULT_VALUE} />
            </Stack>
            <Stack mt='6' gap='2'>
                <Flex align={'center'} gap={'0.5rem'}>
                    {/* <Image
                        src={waterLevelImg}
                        alt='Nível da água'
                    /> */}
                    <Icon iconName="WATER_LEVEL" />
                    <Text>Nível da água</Text>    
                </Flex>               
                <WaterLevel onSelectLevel={handleChangeWaterLevel} tankId={tank.id} level={tank.lastDailyControl?.waterLevel || 'FULL'} />
            </Stack>
            <HStack mt={'8'} justifyContent={'space-between'} bg={'background'} mx={'-6'} px={'6'} pt={'4'} pb={'5'} borderBottomRadius={'lg'} borderTop='1px' borderTopColor={'cardBorderColor'}>
                <Button isLoading={isSubmiting} onClick={handleSubmit}>
                    Salvar controle                    
                </Button>
                {lastDailyControl && (
                    <Stack textAlign={'right'} rowGap={'0.25rem'}>
                        <Text fontSize={'0.875rem'}>Último controle</Text>
                        <Heading fontSize={'0.9375rem'} color={'title'}>{formatDateTime(new Date(lastDailyControl.createdAt))}</Heading>
                    </Stack>
                )}
            </HStack>
        </Box>
    )
}