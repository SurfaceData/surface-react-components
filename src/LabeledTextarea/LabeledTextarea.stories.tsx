import { ComponentStory, ComponentMeta } from "@storybook/react";

import LabeledTextarea from "./LabeledTextarea";

export default {
  title: "Components/LabeledTextarea",
  component: LabeledTextarea,
} as ComponentMeta<typeof LabeledTextarea>;

const Template: ComponentStory<typeof LabeledTextarea> = (args) => (
  <LabeledTextarea {...args} />
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
