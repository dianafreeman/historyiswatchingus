import React from "react";
import renderer from "react-test-renderer";

import COMPONENT_NAME from "./COMPONENT_NAME";

describe("COMPONENT_NAME", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = renderer.create(
        <COMPONENT_NAME {...props}> A COMPONENT_NAME Label</COMPONENT_NAME>
    );
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
