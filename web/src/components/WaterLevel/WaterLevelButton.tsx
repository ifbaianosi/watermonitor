import { Box, Center, Heading, useRadio } from "@chakra-ui/react"

export function WaterLevelButton(props: any) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const { selectedBgColor, selectedColor, children, isChecked } = props
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
      <Box as='label'>
        <input {...input} />
        <Center
          {...checkbox}
          px='3'
          py='0.25rem'
          borderRadius={'lg'}
          bg={'background'}
          cursor='pointer'

          borderWidth={'1px'}
          borderColor={'cardBorderColor'}

          _checked={{
            bg: selectedBgColor,
            borderColor: selectedBgColor,
          }}
          _focus={{
            boxShadow: 'outline',
          }}

        >
          <Heading 
            color={ isChecked ? selectedColor : 'waterLevelText'}
            textTransform={'uppercase'}
            fontSize={'1rem'}            
            fontWeight={isChecked ? 'bold' : 'normal'}
            
            _hover={{
              color: isChecked ? selectedColor : selectedBgColor
            }}
          >
            {children}
          </Heading>
        </Center>
      </Box>
    )
  }