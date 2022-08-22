import { Button as ChakraButton, Alert, AlertIcon, ModalBody, ModalFooter, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
import { FormEvent } from "react";
import { Modal } from "../Modal";
import { Button } from "../shared/Button";

interface ModalReadConfirmationProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (event: FormEvent) => Promise<void>;
    isSubmiting: boolean;
    dataConfirmation: {
        display: string;
        reading: string;
        consumo: string;
    }
}

export function ModalReadConfirmation({ isOpen = false, onClose, isSubmiting = false, onSubmit, dataConfirmation }: ModalReadConfirmationProps) {
    return (
        <Modal headerTitle="Confirmação" isOpen={isOpen} onClose={onClose}>
            <ModalBody>
            <Alert status='warning' mb={'4'}>
                <AlertIcon />
                Confirme os dados da leitura.
            </Alert>
            <TableContainer mb={'4'}>
                <Table variant='simple'>
                    <Tbody>
                        <Tr>
                            <Td>Leitura anterior</Td>
                            <Td fontSize={'xl'} fontWeight={'medium'} color={'title'}>{ dataConfirmation.display }</Td>
                        </Tr>
                        <Tr>
                            <Td>Leitura de hoje</Td>
                            <Td fontSize={'xl'} fontWeight={'medium'} color={'title'}>{ dataConfirmation.reading }</Td>
                        </Tr>
                        <Tr>
                            <Td>Consumo</Td>
                            <Td fontSize={'xl'} fontWeight={'medium'} color={'title'}>{ `${ dataConfirmation.consumo } ` }</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            </ModalBody>

            <ModalFooter justifyContent={'flex-start'}>
                <Button mr={3} isLoading={isSubmiting} onClick={onSubmit}>
                    Confirmar leitura
                </Button>
                <ChakraButton variant='ghost' h={'12'} onClick={onClose}>
                    Revisar leitura
                </ChakraButton>
            </ModalFooter>
        </Modal>
    )
}