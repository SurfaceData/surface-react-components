import { ComponentStory, ComponentMeta } from "@storybook/react";

import LabeledSlider from "./LabeledSlider";

export default {
  title: "Components/LabeledSlider",
  component: LabeledSlider,
} as ComponentMeta<typeof LabeledSlider>;

const Template: ComponentStory<typeof LabeledSlider> = (args) => (
  <LabeledSlider {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "name",
  label: "Name",
  defaultValue: 5,
  min: 0,
  max: 100,
  marks: [
    { value: "25", label: "25" },
    { value: "50", label: "50" },
    { value: "75", label: "75" },
  ],
};
