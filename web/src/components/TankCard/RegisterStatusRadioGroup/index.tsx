import { HStack, useRadioGroup } from "@chakra-ui/react";
import { RadioButton } from "./RadioButton";

const options = ['ABERTO', 'FECHADO']

interface RegisterStatusRadioGroupProps {
  isOpen: boolean;
  onChangeStatus: (status: boolean) => void;
}

export function RegisterStatusRadioGroup({isOpen, onChangeStatus}: RegisterStatusRadioGroupProps) {

  const defaultValue = isOpen ? 'ABERTO' : 'FECHADO'

  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue: defaultValue,
    onChange: handleChangeRegisterStatus,
  })

  function handleChangeRegisterStatus(value: string) {
    const status = registerIsOpen(value)
    onChangeStatus(status)
  }

  function registerIsOpen(value: string) {
    if ('ABERTO' === value) {
      return true

    } 
    
    return false
  }

  const group = getRootProps()
  
  return(
    <HStack h='3.125rem' gap={'0.25rem'} {...group} bg='#F9FAFA' borderColor={'#E6E6E6'} borderWidth='1px' p='0.25rem' borderRadius={'base'}>
      {options.map(value => {
        const radio = getRadioProps({value})
        return(
          <RadioButton key={value} {...radio}>
            {value}
          </RadioButton>
        )
      })}            
    </HStack>
    )
}