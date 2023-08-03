import type { Meta, StoryObj } from "@storybook/react";
import "../../App.css";

import { TextItem } from "./TextItem";

const meta: Meta<typeof TextItem> = {
  component: TextItem,
  includeStories: ["Default"],
  excludeStories: /.*Data$/,
};

export default meta;
type Story = StoryObj<typeof TextItem>;

export const Default: Story = {
  args: {},
};
