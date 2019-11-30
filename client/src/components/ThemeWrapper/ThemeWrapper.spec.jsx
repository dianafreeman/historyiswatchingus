import React from "react";
import renderer from "react-test-renderer";

import ThemeWrapper from "./ThemeWrapper";

describe("ThemeWrapper", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = renderer.create(
        <ThemeWrapper {...props}> A ThemeWrapper Label</ThemeWrapper>
    );
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
