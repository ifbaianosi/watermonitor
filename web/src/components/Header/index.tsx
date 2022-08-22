import { useNavigate, Link } from 'react-router-dom'
import { Box, Flex, Icon, IconButton, Text, Image, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
// import { Button } from '../shared/Button';

interface HeaderProps {
    title?: string;
    navigateTo?: string;
    children?: ReactNode;
}

export function Header({title, navigateTo, children}: HeaderProps) {
    const navigate = useNavigate()
    
    // const { colorMode, toggleColorMode } = useColorMode()

    return(
        <Box as="header" w={'100vw'} bg={'card'} boxShadow='sm' borderBottom={'1px'} borderColor={'cardBorderColor'}>
            <Flex  width={'100%'} margin={'auto'} maxWidth={'1120px'} as="header" justify={'space-between'} align={'center'} py="6">
                <Link to={'/'}>
                    <Image w={'11'} flex='1' src={logoImg} alt="Logo watermonitor" />
                </Link>
                    
                {title && <Text>{title}</Text>}
                {children && children}

                { navigateTo && (
                    <IconButton onClick={() => navigate(navigateTo)} aria-label="Voltar para a página anterior" bg={'background'} borderWidth={1} borderColor={'cardBorderColor'} _hover={{bg: 'card'}} icon={<Icon as={FiArrowLeft}  />} />
                )} 
                
                {/* <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button> */}
            </Flex>
        </Box>
    );
}