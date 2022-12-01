import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers(["box", "input", "text"]);

const LabeledNumberInput = helpers.defineMultiStyleConfig({
  baseStyle: {
    box: {},
    input: {
      border: "1px",
      borderStyle: "solid",
      borderColor: "brand.500",
      outlineOffset: "0",
      _focus: {
        borderColor: "brand.800",
        outline: "1px",
        outlineStyle: "solid",
        outlineColor: "brand.900",
      },
    },
    text: {
      bg: "white",
      marginStart: "2",
      position: "absolute",
      px: "1",
      translate: "no",
      zIndex: "2",
    },
  },
  sizes: {
    xs: {
      text: {
        top: -2,
        fontSize: "8px",
      },
    },
    sm: {
      text: {
        top: -2.5,
        fontSize: "sm",
      },
    },
    md: {
      text: {
        top: "-3",
        fontSize: "md",
      },
    },
    lg: {
      text: {
        top: -3.5,
        fontSize: "lg",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
});

export default LabeledNumberInput;
