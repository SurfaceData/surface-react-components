import { ComponentStory, ComponentMeta } from "@storybook/react";

import Details from "./Details";

export default {
  title: "Components/Details",
  component: Details,
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = (args) => (
  <Details {...args}>words go here</Details>
);

export const Basic = Template.bind({});
Basic.args = {
  variant: "outline",
  title: "Title",
};
