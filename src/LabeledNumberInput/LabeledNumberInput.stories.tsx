import { ComponentStory, ComponentMeta } from "@storybook/react";

import LabeledNumberInput from "./LabeledNumberInput";

export default {
  title: "Components/LabeledNumberInput",
  component: LabeledNumberInput,
} as ComponentMeta<typeof LabeledNumberInput>;

const Template: ComponentStory<typeof LabeledNumberInput> = (args) => (
  <LabeledNumberInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "seed",
  label: "Seed",
  defaultValue: 5,
  min: 0,
  max: 100,
};
