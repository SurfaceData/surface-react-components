import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  socials: {
    github: "https://github.com/SurfaceData/surface-react-components",
    blog: "https://blog.surfacedata.org/",
    twitter: "https://twitter.com/SurfaceData",
  },
};

export const ShareAlike = Template.bind({});
ShareAlike.args = {
  license: "cc-by-sa",
  socials: {
    github: "https://github.com/SurfaceData/surface-react-components",
  },
};
