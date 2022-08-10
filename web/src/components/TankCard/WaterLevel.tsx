import { Box, Center, Flex, Heading, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"

interface WaterLevelProps {
    level: string
    readOnly?: boolean;
}
  
// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export function WaterLevel({level}: WaterLevelProps) {
    const options = ['CHEIO', 'ACIMA DO MEIO', 'PELO MEIO', 'ABAIXO DO MEIO', 'VAZIO']

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'waterlevel',
        defaultValue: level,
        onChange: console.log,
    })

    const group = getRootProps()

    return (
        <Flex {...group} wrap={'wrap'} rowGap={'0.75rem'} columnGap={'0.9375rem'}>
        {options.map((value) => {
            const radio = getRadioProps({ value })
            return (
                <RadioCard key={value} {...radio} level={level}>
                    {value}
                </RadioCard>
            )
        })}
        </Flex>
    )
}

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props: any) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    let bgColor = '#F9FAFA'
    let textColor = 'rgba(69, 84, 71, 0.5)'

    switch (props.level) {
        case 'FULL':
          if ('CHEIO' === props.children) {
            bgColor = 'rgba(0, 166, 81, 0.8)'
            textColor = '#FFFFFF'

          } 

          break;
        
        case 'ALMOST_FULL':
          if ('ACIMA DO MEIO' === props.children) {
              bgColor = '#BED62F'
              textColor = '#FFFFFF'
          }
            
        break;
        
        case 'MIDDLE':
          if ('PELO MEIO' === props.children) {
            bgColor = '#C7BD00'
            textColor = '#FFFFFF'
          }
            
        break;
        
        case 'LOW':
          if ('ABAIXO DO MEIO' === props.children) {
            bgColor = '#FDB813'
            textColor = '#FFFFFF'
          }
            
        break;
        
        case 'EMPTY':
          if ('VAZIO' === props.children) {
            bgColor = '#ED1C24'
            textColor = '#FFFFFF'
          }
          
        break;
           
    
        default:
            break;
    }
  
    return (
      <Box as='label'>
        <input {...input} />
        <Center
          {...checkbox}
          px='3'
          py='0.25rem'
          borderRadius={'lg'}
          bg={bgColor}
          cursor='pointer'

          borderWidth={'1px'}
          borderColor={'rgba(69, 84, 71, 0.5)'}
          
          _checked={{
            bg: bgColor,
            borderColor: 'teal.600',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
        >
          <Heading 
            color={textColor}
            textTransform={'uppercase'}
            fontSize={'1rem'}
            fontWeight='semibold'
          >
            {props.children}
          </Heading>
        </Center>
      </Box>
    )
  }