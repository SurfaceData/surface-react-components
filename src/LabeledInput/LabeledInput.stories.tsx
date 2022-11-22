import { ComponentStory, ComponentMeta } from "@storybook/react";

import LabeledInput from "./LabeledInput";

export default {
  title: "Components/LabeledInput",
  component: LabeledInput,
} as ComponentMeta<typeof LabeledInput>;

const Template: ComponentStory<typeof LabeledInput> = (args) => (
  <LabeledInput {...args} />
);

export const DefaultMedium = Template.bind({});
DefaultMedium.args = {
  name: "name",
  label: "Name",
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  name: "name",
  label: "Name",
  size: "xs",
};

export const Small = Template.bind({});
Small.args = {
  name: "name",
  label: "Name",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  name: "name",
  label: "Name",
  size: "lg",
};

export const Password = Template.bind({});
Password.args = {
  name: "password",
  label: "Password",
  type: "password",
};
