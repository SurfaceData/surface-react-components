import React from "react";
import { useMultiStyleConfig, Box, Textarea, Text } from "@chakra-ui/react";

const LabeledTextarea = React.forwardRef((props: any, ref) => {
  const { size, variant, label, ...rest } = props;
  const styles = useMultiStyleConfig("LabeledTextarea", { size, variant });
  return (
    <Box __css={styles.box} position="relative" display="flex">
      <Box as={Text} __css={styles.text}>
        {label}
      </Box>
      <Textarea size={size} ref={ref} {...styles.textarea} {...rest}></Textarea>
    </Box>
  );
});

export default LabeledTextarea;
