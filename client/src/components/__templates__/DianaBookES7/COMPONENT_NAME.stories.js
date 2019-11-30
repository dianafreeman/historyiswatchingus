import React from "react";
import { action } from "@storybook/addon-actions";
import { COMPONENT_NAME } from ".";

export const byDefault = () => <COMPONENT_NAME onClick={action('You Clicked!')}> A Default COMPONENT_NAME </COMPONENT_NAME>;

export default {
  title: "COMPONENT_NAME",
  component: COMPONENT_NAME
};
