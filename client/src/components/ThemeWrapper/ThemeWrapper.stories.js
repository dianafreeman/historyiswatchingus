import React from "react";
import { action } from "@storybook/addon-actions";
import { ThemeWrapper } from ".";

export const byDefault = () => <ThemeWrapper onClick={action('You Clicked!')}> A Default ThemeWrapper </ThemeWrapper>;

export default {
  title: "ThemeWrapper",
  component: ThemeWrapper
};
