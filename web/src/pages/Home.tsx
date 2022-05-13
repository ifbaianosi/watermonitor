import { Link } from 'react-router-dom'
import { Link as ChakraLink } from "@chakra-ui/react";

export function Home() {
    return(
        <Link to={'/hydrometer'}>
            <ChakraLink>LEITURA DIÁRIA DO HIDRÔMETRO</ChakraLink>
        </Link>
    )
}