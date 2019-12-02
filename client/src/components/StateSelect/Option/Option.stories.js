import React from "react";
import { action } from "@storybook/addon-actions";
import { Option } from ".";

export const byDefault = () => <Option onClick={action('You Clicked!')}> A Default Option </Option>;

export default {
  title: "Option",
  component: Option
};
