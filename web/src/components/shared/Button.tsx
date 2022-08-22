import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps extends ChakraButtonProps {
    children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
    return(
        <ChakraButton 
            {...rest} 
            loadingText='Aguarde...' 
            h={'12'} 
            bg={'primary'} 
            textColor={'background'} 
            fontSize="0.9375rem"
            fontFamily={'heading'}
            _hover={{bg: 'primary', filter: 'brightness(0.8)'}}
        >
            { children }
        </ChakraButton>
    )
}