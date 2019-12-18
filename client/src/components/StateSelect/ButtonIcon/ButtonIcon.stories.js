import React from "react";
import { action } from "@storybook/addon-actions";
import ButtonIcon from ".";

export const byDefault = () => <ButtonIcon />;
export const withSource = () => <ButtonIcon src={'./assets/graphics/compass.svg'} onClick={action('You Clicked!')} />;

export default {
  title: "ButtonIcon",
  component: ButtonIcon
};
