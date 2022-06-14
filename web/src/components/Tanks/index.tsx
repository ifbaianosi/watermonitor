import { Flex } from "@chakra-ui/react";
import { TankCard } from "../TankCard";

interface Tank {
    id: number;
    name: string;
}

interface TanksProps {
    tanks: Tank[]
}

export function Tanks( { tanks }: TanksProps) {
    return(
        <Flex mt='12' gap='8' flexWrap='wrap' justify='center'>
            {tanks.map(tank => {
                return(
                    <TankCard tank={tank} key={tank.id} />
                )
            })}
        </Flex>
    )
}