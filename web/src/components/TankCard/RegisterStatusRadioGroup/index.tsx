import { HStack, useRadioGroup } from "@chakra-ui/react";
import { RadioButton } from "./RadioButton";

export const options = ['ABERTO', 'FECHADO']

interface RegisterStatusRadioGroupProps {
  isOpen: boolean;
}

export function RegisterStatusRadioGroup({isOpen}: RegisterStatusRadioGroupProps) {

  const defaultValue = isOpen ? 'ABERTO' : 'FECHADO'

  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue: defaultValue,
    onChange: console.log,
  })

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