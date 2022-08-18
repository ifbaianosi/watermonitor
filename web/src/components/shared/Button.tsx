import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps extends ChakraButtonProps {
    children: ReactNode;
}

export function Button( { /* onSubmit ,*/ children, ...rest }: ButtonProps) {
    return(
        <ChakraButton /*  onClick={onSubmit} */ {...rest} loadingText='Aguarde...' h={'12'} bg={'brand.blue'} textColor={'white'} fontSize="15px" _hover={{opacity: '0.8'}}>
            
            { children }
        </ChakraButton>
    )
}