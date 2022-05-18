import { Box, Flex, Icon, IconButton, Text, Image } from "@chakra-ui/react";
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'

interface HeaderProps {
    title: string;
    navigateTo?: string;
}

export function Header({title, navigateTo}: HeaderProps) {
    const navigate = useNavigate()

    return(
        <Box as="header" w={'100vw'} bg={'white'} borderBottom={'1px'} borderColor={'stroke'}>
            <Flex px='6' width={'100%'} margin={'auto'} maxWidth={'1120px'} as="header" justify={'space-between'} align={'center'} py="6">
                <Image w={'11'} src={logoImg} alt="Logo watermonitor" />
                    
                <Text>{title}</Text>

                <IconButton onClick={() => navigateTo && navigate(navigateTo)} aria-label="Voltar para a página anterior" bg={'white'} borderWidth={1} borderColor={'stroke'} icon={<Icon as={FiArrowLeft}  />} />
            </Flex>
        </Box>
    );
}