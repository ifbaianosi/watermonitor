import { Link } from 'react-router-dom'
import { Container, Flex, Input, InputGroup, InputRightElement, Link as ChakraLink, Skeleton, Stack, Text } from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi'

import { Header } from '../components/Header';
import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Tanks } from '../components/Tanks';
import { Tank } from '../types';

export function Home() {

    const [tanks, setTanks] = useState<Tank[]>([])
    const [tanksFilter, setTanksFilter] = useState<Tank[]>([])

    useEffect(() => {
        async function loadData() {
            const response = await api.get<Tank[]>('/tanks')
            setTanks(response.data)
            setTanksFilter(response.data)
        }

        loadData()
    }, [])

    function handleFilterTank(searchValue: string) {
        const tanksFiltered = tanks.filter(tank => tank.name.toLowerCase().includes(searchValue.toLowerCase()))
        tanksFiltered ? setTanksFilter([...tanksFiltered]) : setTanksFilter(tanks)
    }

    return(
        <React.Fragment>
            <Header>
                <Flex justify={'space-between'} w={'100%'} align={'center'}>
                    <Flex justify={'center'} width={'100%'} gap={'10'}>
                        <Link to={'/dailycontrols'}>
                            <ChakraLink fontSize={'0.875rem'}>CONTROLE DIÁRIO</ChakraLink>
                        </Link>
                        <Link to={'/hydrometer'}>
                            <ChakraLink fontSize={'0.875rem'}>LEITURA DO HIDRÔMETRO</ChakraLink>
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
                <Flex mt='10' justify={['space-between']} direction={['column', 'row']} gap='5'>
                    <Stack spacing={1}>
                        <Text fontSize={'1.375rem'} fontWeight='bold' color={'title'} lineHeight={'1.625rem'}>{tanks.length}</Text>
                        <Text fontSize={'0.9375rem'} fontWeight='medium'>Reservatórios</Text>
                    </Stack>
                    <InputGroup maxW={'22rem'}>
                        <Input 
                            type='search' 
                            h='2.875rem' 
                            placeholder='Pesquisar reservatório' 
                            bg={'card'} 
                            _hover={{bg: 'card'}}
                            _focus={{bg: 'card'}}
                            border={'1px'} 
                            borderColor={'cardBorderColor'} 
                            boxShadow='md' 
                            onChange={(e) => handleFilterTank(e.target.value)}
                        />
                        <InputRightElement
                            mt={'1'}
                            pointerEvents='none'
                            children={<FiSearch color='texts' size={'1.5rem'}/>}
                        />
                    </InputGroup>
                </Flex>

                {tanksFilter.length == 0 ? (
                    <Flex mt='12' gap='8' flexWrap='wrap' justify={['center', 'center', 'flex-start']}>
                        <Skeleton h={'345px'} w='22rem'  borderRadius={'lg'} />
                        <Skeleton h={'345px'} w='22rem'  borderRadius={'lg'} />
                        <Skeleton h={'345px'} w='22rem'  borderRadius={'lg'} />
                    </Flex>
                ) : (
                    <Tanks tanks={tanksFilter} type='READ_ONLY' />            
                )} 
                
            </Container>
        </React.Fragment>
    )
}