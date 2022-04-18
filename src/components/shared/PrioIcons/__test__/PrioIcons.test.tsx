import * as React from "react";
import renderer from "react-test-renderer";
import {
  EmptyPrioIcon,
  HighestPrioIcon,
  HighPrioIcon,
  MidPrioIcon,
  LowPrioIcon,
} from "../PrioIcons";

describe("Test PrioIcons component", () => {
  it("Should renders all icons correctly", () => {
    const tree1 = renderer
      .create(<EmptyPrioIcon style={{ width: 32, height: 32 }} />)
      .toJSON();

    const tree2 = renderer
      .create(<HighestPrioIcon style={{ width: 32, height: 32 }} />)
      .toJSON();

    const tree3 = renderer
      .create(<HighPrioIcon style={{ width: 32, height: 32 }} />)
      .toJSON();

    const tree4 = renderer
      .create(<MidPrioIcon style={{ width: 32, height: 32 }} />)
      .toJSON();

    const tree5 = renderer
      .create(<LowPrioIcon style={{ width: 32, height: 32 }} />)
      .toJSON();

    expect(tree1).toMatchSnapshot();
    expect(tree2).toMatchSnapshot();
    expect(tree3).toMatchSnapshot();
    expect(tree4).toMatchSnapshot();
    expect(tree5).toMatchSnapshot();
  });
});
