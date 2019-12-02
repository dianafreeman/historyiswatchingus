import React from "react";
import renderer from "react-test-renderer";

import Menu from "./Menu";

describe("Menu", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = renderer.create(
        <Menu {...props}> A Menu Label</Menu>
    );
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
