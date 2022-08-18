import { Flex } from "@chakra-ui/react";
import { Tank } from "../../types";
import { TankCard } from "../TankCard";
import { TankDailyControlForm } from "../TankDailyControlForm";

type TanksCardType = 'READ_ONLY' | 'WRITING';

interface TanksProps {
    tanks: Tank[];
    type?: TanksCardType;
}

export function Tanks( { tanks, type = 'WRITING' }: TanksProps) {

    function cardTypeComponent(tank: Tank) {
        switch (type) {
            case 'WRITING':
                return(                    
                    <TankDailyControlForm tank={tank} key={tank.id} />
                )

            case 'READ_ONLY':
                return(                    
                    <TankCard tank={tank} key={tank.id} />
                )            
        
            default:
                null;
        }
    } 

    return(
        <Flex mt='12' mb={'4rem'} gap='8' flexWrap='wrap' justify={['center', 'center', 'flex-start']}>
            {tanks.map(tank => {
                return (cardTypeComponent(tank))
            })}
        </Flex>
    )
}