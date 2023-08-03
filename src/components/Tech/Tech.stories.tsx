import type { Meta, StoryObj } from "@storybook/react";
import "../../App.css";

import { Tech } from "./Tech";

const meta: Meta<typeof Tech> = {
  component: Tech,
  includeStories: ["Default"],
  excludeStories: /.*Data$/,
};

export default meta;
type Story = StoryObj<typeof Tech>;

export const Default: Story = {
  args: {},
};
