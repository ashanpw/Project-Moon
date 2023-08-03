import type { Meta, StoryObj } from "@storybook/react";
import "../../App.css";

import { Experience } from "./Experience";

const meta: Meta<typeof Experience> = {
  component: Experience,
  includeStories: ["Default"],
  excludeStories: /.*Data$/,
};

export default meta;
type Story = StoryObj<typeof Experience>;

export const Default: Story = {
  args: {},
};
