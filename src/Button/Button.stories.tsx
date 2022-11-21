import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Save</Button>
);

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};

export const Solid = Template.bind({});
Solid.args = {
  variant: "solid",
};

export const SmallOutline = Template.bind({});
SmallOutline.args = {
  variant: "outline",
  size: "sm",
};

export const SmallSolid = Template.bind({});
SmallSolid.args = {
  variant: "solid",
  size: "sm",
};
