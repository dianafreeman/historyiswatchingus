import React from "react";
import renderer from "react-test-renderer";

import ButtonIcon from "./ButtonIcon";

describe("ButtonIcon", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = renderer.create(
        <ButtonIcon {...props} />
    );
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
