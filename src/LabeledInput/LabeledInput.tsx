import React from "react";
import {
  useMultiStyleConfig,
  Box,
  Input,
  StylesProvider,
  Text,
} from "@chakra-ui/react";

const LabeledInput = (props: any) => {
  const { size, variant, label, ...rest } = props;
  const styles = useMultiStyleConfig("LabeledInput", { size, variant });
  return (
    <Box __css={styles.box} position="relative" display="flex">
      <Box as={Text} __css={styles.text}>
        {label}
      </Box>
      <Input size={size} {...styles.input} {...rest}></Input>
    </Box>
  );
};

export default LabeledInput;
