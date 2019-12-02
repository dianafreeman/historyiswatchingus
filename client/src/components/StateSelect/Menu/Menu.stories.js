import React from "react";
import { action } from "@storybook/addon-actions";
import { Menu } from ".";

export const byDefault = () => <Menu onClick={action('You Clicked!')}> A Default Menu </Menu>;

export default {
  title: "Menu",
  component: Menu
};
