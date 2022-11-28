import { ComponentStory, ComponentMeta } from "@storybook/react";

import LabeledSelect from "./LabeledSelect";

export default {
  title: "Components/LabeledSelect",
  component: LabeledSelect,
} as ComponentMeta<typeof LabeledSelect>;

const Template: ComponentStory<typeof LabeledSelect> = (args) => (
  <LabeledSelect {...args}>
    <option value="1">One</option>
    <option value="2">Two</option>
  </LabeledSelect>
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
