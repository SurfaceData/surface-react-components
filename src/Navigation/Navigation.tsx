import React from "react";
import { Avatar, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

const Navigation = (props: any) => {
  const { children, variant, avatar, logo, ...rest } = props;
  return (
    <Box as="nav" px="4" py="4" width="full" display="flex">
      <Flex justify="space-between" width="full">
        <Box boxSize="48px">{logo}</Box>
        <HStack spacing="12px">{children}</HStack>
        <Box boxSize="48px">{avatar}</Box>
      </Flex>
    </Box>
  );
};

const NavItem = (props: any) => {
  return <Box {...props} />;
};

export default Navigation;
export { NavItem };
