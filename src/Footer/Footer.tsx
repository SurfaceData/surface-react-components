import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import {
  useStyleConfig,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";

const ccByNcLicense = {
  href: "http://creativecommons.org/licenses/by-nc/4.0/",
  img: "https://i.creativecommons.org/l/by-nc/4.0/88x31.png",
  label: "Creative Commons Attribution-NonCommercial 4.0 International License",
};

const ccBySaLicense = {
  href: "http://creativecommons.org/licenses/by-sa/4.0/",
  img: "https://i.creativecommons.org/l/by-sa/4.0/88x31.png",
  label: "Creative Commons Attribution-ShareAlike 4.0 International License",
};

const licenses = new Map([
  ["cc-by-nc", ccByNcLicense],
  ["cc-by-sa", ccBySaLicense],
]);

const Footer = (props: any) => {
  const { variant, license, socials, ...rest } = props;
  const styles = useStyleConfig("footer", { variant });
  const { href, img, label } = licenses.get(license) || ccByNcLicense;
  return (
    <Container
      as="footer"
      role="contentinfo"
      __css={styles}
      {...rest}
      maxW="full"
      py={{ base: 12, md: 16 }}
    >
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <a rel="license" href={href}>
            <img alt={label} height={31} width={88} src={img} />
          </a>
          <ButtonGroup variant="outline">
            {socials.blog && (
              <IconButton
                as="a"
                href={socials.blog}
                target="_"
                isRound={true}
                aria-label="blog"
                icon={<ImBlog fontSize="1.25rem" />}
              />
            )}
            {socials.github && (
              <IconButton
                as="a"
                href={socials.github}
                target="_"
                isRound={true}
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
            )}
            {socials.twitter && (
              <IconButton
                as="a"
                href={socials.twitter}
                target="_"
                isRound={true}
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
            )}
          </ButtonGroup>
        </Stack>
        <Text fontSize="xs" color="subtle" w="64">
          This work is licensed under a{" "}
          <a rel="license" href={href}>
            {label}
          </a>
          .
        </Text>
      </Stack>
    </Container>
  );
};

export default Footer;
