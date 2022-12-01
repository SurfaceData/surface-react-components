import React, { useState } from "react";
import {
  useMultiStyleConfig,
  Box,
  NumberDecrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  Text,
} from "@chakra-ui/react";

const LabeledNumberInput = React.forwardRef((props: any, ref) => {
  const { size, label, onChange, defaultValue, marks, ...rest } = props;

  const [value, setValue] = useState(defaultValue);
  const styles = useMultiStyleConfig("LabeledNumberInput", { size });

  const onInternalChange = (value: any) => {
    setValue(value);
    onChange && onChange(value);
  };

  return (
    <Box __css={styles.box} position="relative" display="flex">
      <Box as={Text} __css={styles.text}>
        {label}
      </Box>
      <NumberInput value={value} onChange={onInternalChange}>
        <NumberInputField {...styles.input} {...rest} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
});

export default LabeledNumberInput;
