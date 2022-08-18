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
          bg={'#F9FAFA'}
          cursor='pointer'

          borderWidth={'1px'}
          borderColor={'rgba(69, 84, 71, 0.5)'}
          
          _checked={{
            bg: selectedBgColor,
            // borderColor: 'teal.500',
          }}
          _focus={{
            boxShadow: 'outline',
          }}

        >
          <Heading 
            color={ isChecked ? selectedColor : 'rgba(69, 84, 71, 0.5)'}
            textTransform={'uppercase'}
            fontSize={'1rem'}
            fontWeight='semibold'
          >
            {children}
          </Heading>
        </Center>
      </Box>
    )
  }