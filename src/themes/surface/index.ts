import * as components from "./components";
import { theme as baseTheme, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    ...baseTheme.colors,
    brand: baseTheme.colors.gray,
  },
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  components: { ...components },
});

export default theme;
