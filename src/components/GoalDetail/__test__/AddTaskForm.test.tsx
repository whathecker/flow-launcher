import * as React from "react";
import renderer from "react-test-renderer";
import AddTaskForm from "../AddTaskForm";

describe("Test AddTaskForm component", () => {
  it("Should renders AddTaskForm correctly", () => {
    const mockSetState = () => false;
    const tree = renderer
      .create(
        <AddTaskForm
          goal_id="mock_goal"
          addTaskFormOpenedHandler={mockSetState}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
