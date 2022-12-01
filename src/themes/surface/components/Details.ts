import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers(["accordion", "item", "title"]);

const Details = helpers.defineMultiStyleConfig({
  baseStyle: {
    accordion: {},
    item: {
      borderBottom: "none",
      borderTop: "none",
      borderInlineStart: "2px solid",
      borderInlineStartColor: "blue.300",
    },
    title: {
      color: "blue.300",
      fontSize: "16px",
      fontWeight: "600",
    },
  },
});

export default Details;
