import { Container, Flex, Input, InputGroup, InputRightElement, Skeleton, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Header } from "../components/Header";
import { Tanks } from "../components/Tanks";
import { api } from "../services/api";
import { Tank } from "../types";

export function TankDailyControl() {
    const [tanks, setTanks] = useState<Tank[]>([])
    const [tanksFilter, setTanksFilter] = useState<Tank[]>([])

    useEffect(() => {
        async function loadData() {
            const { data } = await api.get<Tank[]>('/tanks')
            setTanks(data)
            setTanksFilter(data)
        }

        loadData()
    }, [])

    function handleFilterTank(searchValue: string) {
        const tanksFiltered = tanks.filter(tank => tank.name.toLowerCase().includes(searchValue.toLowerCase()))
        tanksFiltered ? setTanksFilter([...tanksFiltered]) : setTanksFilter(tanks)
    }

    return(
        <React.Fragment>
            <Header navigateTo="/" title="CONTROLE DIÁRIO DOS RESERVATÓRIOS" />

            <Container maxWidth={'1120px'} p={'0'} overflowX={'hidden'}>
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
                        <Skeleton h={'558px'} w='22rem' borderRadius={'lg'} />
                        <Skeleton h={'558px'} w='22rem' borderRadius={'lg'} />
                        <Skeleton h={'558px'} w='22rem' borderRadius={'lg'} />
                    </Flex>
                ) : (
                    <Tanks tanks={tanksFilter} />
                )}                 

            </Container>
        </React.Fragment>
    )
}