import React from "react";
import renderer from "react-test-renderer";

import PageWrapper from "./PageWrapper";

describe("PageWrapper", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = renderer.create(
        <PageWrapper {...props}> A PageWrapper Label</PageWrapper>
    );
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
