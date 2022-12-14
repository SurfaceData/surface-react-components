import React, { useState } from "react";
import {
  useMultiStyleConfig,
  Box,
  Flex,
  NumberDecrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

const LabeledSlider = (props: any) => {
  const {
    size,
    variant,
    label,
    onChange,
    defaultValue,
    min,
    max,
    marks,
    ...rest
  } = props;

  const [sliderValue, setSliderValue] = useState(defaultValue);

  const onInternalChange = (value: any) => {
    setSliderValue(value);
    onChange && onChange(value);
  };

  const styles = useMultiStyleConfig("LabeledSlider", { size, variant });
  return (
    <Box __css={styles.box} position="relative" display="flex">
      <Box as={Text} __css={styles.text}>
        {label}
      </Box>
      <Box __css={styles.shell}>
        <Flex>
          <NumberInput
            maxW="100px"
            mr="2rem"
            min={min}
            max={max}
            value={sliderValue}
            onChange={onInternalChange}
          >
            <NumberInputField {...styles.input} {...rest} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Slider
            value={sliderValue}
            onChange={onInternalChange}
            min={min}
            max={max}
            flex="1"
            focusThumbOnChange={false}
          >
            {marks &&
              marks.map(({ value, label }: any, index: number) => (
                <SliderMark key={index} __css={styles.mark} value={value}>
                  {label}
                </SliderMark>
              ))}
            <SliderTrack>
              <SliderFilledTrack bg="brand.900" />
            </SliderTrack>
            <SliderThumb fontSize="xs" boxSize="32px" children={sliderValue} />
          </Slider>
        </Flex>
      </Box>
    </Box>
  );
};

export default LabeledSlider;
