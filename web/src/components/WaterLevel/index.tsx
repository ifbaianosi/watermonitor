import { Flex, useRadioGroup } from "@chakra-ui/react"
import { WaterLevelType, waterLevelOptions } from "../../types";
import { WaterLevelButton } from "./WaterLevelButton";

interface WaterLevelProps {
  tankId?: number;
  level: WaterLevelType;
  readOnly?: boolean;
  onSelectLevel?: (waterLevel: WaterLevelType) => void;
}
  
export function WaterLevel({ tankId, level, readOnly = false, onSelectLevel }: WaterLevelProps) {

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'waterlevel',
        defaultValue: level,
        onChange: handleSelectWaterLevel,
    })

    const group = getRootProps()

    function handleSelectWaterLevel(waterLevel: WaterLevelType) {
        
        if (!readOnly) {
            onSelectLevel && tankId && onSelectLevel(waterLevel)       
        }

    }

    return (
        <Flex {...group} wrap={'wrap'} rowGap={'0.75rem'} columnGap={'0.9375rem'}>
          {Object.entries(waterLevelOptions).map(([key, value]) => {
            const radio = getRadioProps({ value: key })

            if (readOnly) {

                if (level === key) {
                    return(
                        <WaterLevelButton
                            {...radio} 
                            key={key} 
                            selectedBgColor={value.selected.bgColor}
                            selectedColor={value.selected.color}
                        >
                            {value.description}
                        </WaterLevelButton>
                    )
                }

            } else {
                return(
                    <WaterLevelButton
                        {...radio} 
                        key={key} 
                        selectedBgColor={value.selected.bgColor}
                        selectedColor={value.selected.color}
                    >
                        {value.description}
                    </WaterLevelButton>
                )
            }
          })}
        </Flex>
    )
}