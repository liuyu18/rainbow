import type { Meta } from "@storybook/react";
import { Default } from "./Default.stories";
import DefaultSource from "./Default.stories?raw";
import { RainbowProvider } from "rainbow-ui";

const meta = {
  title: "组件/RainbowProvider",
  component: RainbowProvider,
} satisfies Meta<typeof RainbowProvider>;

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};

export { Default };
