import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar, Image, Link } from "@chakra-ui/react";

import Navigation, { NavItem } from "./Navigation";

export default {
  title: "Components/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  logo: (
    <Link>
      <Image src="/surface-data.svg" />
    </Link>
  ),
  avatar: <Avatar src="/keith-profile.jpg" />,
  children: (
    <>
      <NavItem>
        <Link>Home</Link>
      </NavItem>
      <NavItem>
        <Link>About</Link>
      </NavItem>
    </>
  ),
};
