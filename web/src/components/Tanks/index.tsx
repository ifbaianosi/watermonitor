import { Flex } from "@chakra-ui/react";
import { Tank } from "../../pages/Home";
import { TankCard } from "../TankCard";

interface TanksProps {
    tanks: Tank[]
}

export function Tanks( { tanks }: TanksProps) {
    return(
        <Flex mt='12' gap='8' flexWrap='wrap' justify={['center', 'center', 'flex-start']}>
            {tanks.map(tank => {
                return(
                    <TankCard tank={tank} key={tank.id} />
                )
            })}
        </Flex>
    )
}