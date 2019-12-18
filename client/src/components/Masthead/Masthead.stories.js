import React from "react";
import { action } from "@storybook/addon-actions";
import Masthead from ".";

export const byDefault = () => <Masthead onClick={action('You Clicked!')}> A Default Masthead </Masthead>;

export default {
  title: "Masthead",
  component: Masthead
};
