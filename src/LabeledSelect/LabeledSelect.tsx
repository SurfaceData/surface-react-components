import React from "react";
import { useMultiStyleConfig, Box, Select, Text } from "@chakra-ui/react";

const LabeledSelect = React.forwardRef((props: any, ref) => {
  const { size, variant, label, ...rest } = props;
  const styles = useMultiStyleConfig("LabeledSelect", { size, variant });
  return (
    <Box __css={styles.box} position="relative" display="flex">
      <Box as={Text} __css={styles.text}>
        {label}
      </Box>
      <Select size={size} ref={ref} {...styles.select} {...rest}></Select>
    </Box>
  );
});

export default LabeledSelect;
