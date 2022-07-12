import { ReactNode } from 'react';
import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
  } from '@chakra-ui/react'


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    headerTitle: string;
    children: ReactNode;
}

export function Modal( {isOpen, onClose, headerTitle, children}: ModalProps) {
    return (
        <ChakraModal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{ headerTitle }</ModalHeader>
                <ModalCloseButton />
                { children }
            </ModalContent>
        </ChakraModal>
    )
}