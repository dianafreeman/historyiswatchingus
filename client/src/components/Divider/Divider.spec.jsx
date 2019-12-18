import React from "react";
import renderer from "react-test-renderer";

import Divider from "./Divider";

describe("Divider", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = renderer.create(
        <Divider {...props}> A Divider Label</Divider>
    );
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
