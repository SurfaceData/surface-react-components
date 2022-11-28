import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers([
  "box",
  "mark",
  "shell",
  "slider",
  "text",
]);

const LabeledSlider = helpers.defineMultiStyleConfig({
  baseStyle: {
    box: {},
    mark: {
      mt: 2,
      ml: -2,
      fontSize: "sm",
    },
    shell: {
      border: "1px",
      borderRadius: 1,
      borderStyle: "solid",
      borderColor: "brand.500",
      outlineOffset: "0",
      pt: 12,
      pb: 6,
      px: 4,
      width: "100%",
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
  variants: {},
  defaultProps: {
    size: "md",
  },
});

export default LabeledSlider;
