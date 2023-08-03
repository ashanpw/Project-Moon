import type { Meta, StoryObj } from "@storybook/react";
import "../../App.css";

import { ExperienceItem } from "./ExperienceItem";

const meta: Meta<typeof ExperienceItem> = {
  component: ExperienceItem,
  includeStories: ["Default"],
  excludeStories: /.*Data$/,
};

export default meta;
type Story = StoryObj<typeof ExperienceItem>;

export const Default: Story = {
  args: {},
};
