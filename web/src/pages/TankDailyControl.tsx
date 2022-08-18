import { Container, Flex, Input, InputGroup, InputRightElement, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
        <>
            <Header navigateTo="/" title="CONTROLE DIÁRIO DOS RESERVATÓRIOS" />

            <Container maxWidth={'1120px'} p={'0'}>
            <Flex mt='10' justify={['space-between']} direction={['column', 'row']} gap='5'>
                <Stack spacing={1}>
                    <Text fontSize={'1.375rem'} fontWeight='bold' lineHeight={'1.625rem'}>{tanks.length}</Text>
                    <Text fontSize={'0.9375rem'} fontWeight='semibold' opacity={0.7}>Reservatórios</Text>
                </Stack>
                <InputGroup maxW={'22rem'}>
                    <Input 
                        type='search' 
                        h='2.875rem' 
                        placeholder='Pesquisar reservatório' 
                        bg={'white'} 
                        _hover={{bg: 'white'}}
                        _focus={{bg: 'white'}}
                        border={'1px'} 
                        borderColor={'stroke'} 
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
        </>
    )
}