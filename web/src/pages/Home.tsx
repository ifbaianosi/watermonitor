import { Link } from 'react-router-dom'
import { Box, Container, Flex, Icon, IconButton, Link as ChakraLink, Text } from "@chakra-ui/react";
import { FiLogOut } from 'react-icons/fi'

import { Header } from '../components/Header';
import { TankCard } from '../components/TankCard';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Tanks } from '../components/Tanks';

export interface Tank {
    id: number;
    name: string;
}

export function Home() {

    const [tanks, setTanks] = useState<Tank[]>([])

    useEffect(() => {
        async function loadData() {
            const response = await api.get('/tanks')
            setTanks(response.data.tanks)
        }

        loadData()
    }, [])

    return(
        <>
        <Header>
            <Flex justify={'space-between'} w={'100%'} align={'center'}>
                <Flex justify={'center'} width={'100%'} gap={'10'}>
                    <Link to={'/'}>
                        <ChakraLink>RESERVATÓRIOS</ChakraLink>
                    </Link>
                    <Link to={'/hydrometer'}>
                        <ChakraLink>HIDRÔMETRO</ChakraLink>
                    </Link>
                </Flex>
                <Flex align={'center'} color={'#fff'}>
                    {/* <Text mr={'2'} fontSize={'xs'} >Olá,</Text>
                    <Text fontSize={'sm'} fontWeight={'semibold'} mr={'2'}>Glauber</Text>
                    <IconButton aria-label="Sair da aplicação" bg={'white'} icon={<Icon as={FiLogOut} />} /> */}
                </Flex>
            </Flex>
        </Header>
        <Container maxWidth={'1120px'} p={'0'}>
            <Tanks tanks={tanks} />
            
        </Container>
        </>
    )
}