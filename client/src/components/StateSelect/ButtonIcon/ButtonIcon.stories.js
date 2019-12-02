import React from "react";
import { action } from "@storybook/addon-actions";
import { ButtonIcon } from ".";

export const byDefault = () => <ButtonIcon onClick={action('You Clicked!')}> A Default ButtonIcon </ButtonIcon>;

export default {
  title: "ButtonIcon",
  component: ButtonIcon
};
