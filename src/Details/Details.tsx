import React from "react";
import {
  useMultiStyleConfig,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

const Details = (props: any) => {
  const { size, variant, title, children, ...rest } = props;
  const styles = useMultiStyleConfig("Details", { size, variant });
  return (
    <Accordion allowToggle={true} __css={styles.accordion} {...rest}>
      <Box as={AccordionItem} __css={styles.item}>
        <h2>
          <Box
            as={AccordionButton}
            __css={styles.title}
            _focus={{ boxShadow: "none" }}
            _hover={{ bg: "white" }}
          >
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </Box>
        </h2>
        <AccordionPanel>{children}</AccordionPanel>
      </Box>
    </Accordion>
  );
};

export default Details;
