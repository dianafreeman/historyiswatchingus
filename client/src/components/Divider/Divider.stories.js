import React from "react";
import { action } from "@storybook/addon-actions";
import Divider from ".";

export const byDefault = () => <Divider onClick={action('You Clicked!')} />;

export default {
  title: "Divider",
  component: Divider
};
