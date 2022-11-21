import React from "react";
import { useStyleConfig, Button as BaseButton } from "@chakra-ui/react";

const Button = (props: any) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("button", { variant });
  return (
    <BaseButton __css={styles} {...rest}>
      {children}
    </BaseButton>
  );
};

export default Button;
