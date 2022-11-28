import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";

const Navigation = (props: any) => {
  const { children, avatar, logo } = props;
  return (
    <Box as="nav" px="4" py="4" width="full" display="flex">
      <Flex justify="space-between" width="full">
        {logo && <Box boxSize="48px">{logo}</Box>}
        <HStack spacing="12px">{children}</HStack>
        {avatar && <Box boxSize="48px">{avatar}</Box>}
      </Flex>
    </Box>
  );
};

const NavItem = (props: any) => {
  return <Box {...props} />;
};

export default Navigation;
export { NavItem };
