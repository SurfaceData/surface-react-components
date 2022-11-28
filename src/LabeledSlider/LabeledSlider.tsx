import React, { useState } from "react";
import {
  useMultiStyleConfig,
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

const LabeledSlider = (props: any) => {
  const { size, variant, label, onChange, defaultValue, marks, ...rest } =
    props;

  const [sliderValue, setSliderValue] = useState(defaultValue);
  const styles = useMultiStyleConfig("LabeledSlider", { size, variant });

  const onInternalChange = (value: number) => {
    setSliderValue(value);
    onChange && onChange(value);
  };

  return (
    <Box __css={styles.box} position="relative" display="flex">
      <Box as={Text} __css={styles.text}>
        {label}
      </Box>
      <Box __css={styles.shell}>
        <Slider
          onChange={onInternalChange}
          defaultValue={defaultValue}
          {...rest}
        >
          {marks &&
            marks.map(({ value, label }: any, index: number) => (
              <SliderMark key={index} __css={styles.mark} value={value}>
                {label}
              </SliderMark>
            ))}
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg="brand.500"
            color="white"
            mt="-10"
            ml="-5"
            px="3"
          >
            {sliderValue}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack bg="brand.900" />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </Box>
  );
};

export default LabeledSlider;
