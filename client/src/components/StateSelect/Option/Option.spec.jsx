import React from "react";
import renderer from "react-test-renderer";

import Option from "./Option";

describe("Option", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = renderer.create(
        <Option {...props}> A Option Label</Option>
    );
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
