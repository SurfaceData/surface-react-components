const baseStyle = {
  alignItems: "center",
  border: "1px",
  borderRadius: "3xl",
  borderStyle: "solid",
  display: "flex",
  fontSize: ".9rem",
  fontWeight: "600",
  justifyContent: "center",
};

const sizes = {
  sm: {
    px: "4",
    py: "2",
  },
  md: {
    minH: "12",
    minW: "56",
  },
};

const variants = {
  outline: {
    borderColor: "brand.200",
    _hover: {
      borderColor: "brand.900",
      bg: "white",
    },
  },
  solid: {
    color: "white",
    bg: "brand.900",
    _hover: {
      bg: "white",
      color: "brand.900",
    },
  },
};

const defaultProps = {
  variant: "outline",
  size: "md",
};

const theme = {
  baseStyle,
  sizes,
  variants,
  defaultProps,
};

export default theme;
