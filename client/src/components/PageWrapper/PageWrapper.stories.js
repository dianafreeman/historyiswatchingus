import React from "react";
import { action } from "@storybook/addon-actions";
import PageWrapper from ".";

export const byDefault = () => <PageWrapper onClick={action('You Clicked!')}> A Default PageWrapper </PageWrapper>;

export default {
  title: "PageWrapper",
  component: PageWrapper
};
