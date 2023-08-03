import type { Meta, StoryObj } from "@storybook/react";
import "../../App.css";

import { AboutGrid } from "./AboutGrid";

const meta: Meta<typeof AboutGrid> = {
  component: AboutGrid,
  includeStories: ["Default"],
  excludeStories: /.*Data$/,
};

export default meta;
type Story = StoryObj<typeof AboutGrid>;

export const Default: Story = {
  args: {},
};
