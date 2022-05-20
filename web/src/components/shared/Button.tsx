import { Button as ChakraButton, Icon, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";
import { FiCheck } from "react-icons/fi";

interface ButtonProps extends ChakraButtonProps {
    onSubmit: () => void;
    icon?: ReactElement;
    children: ReactNode;
}

export function Button( { onSubmit, children, ...rest }: ButtonProps) {
    return(
        <ChakraButton onClick={onSubmit} {...rest} loadingText='Aguarde' mt={'8'} h={'12'} bg={'brand.blue'} textColor={'white'} fontSize="15px" _hover={{opacity: '0.8'}}>
            <Icon as={FiCheck} fontSize="20" mr={'3'} />
            { children }
        </ChakraButton>
    )
}