import colorRenderer from "../colorRenderer";

describe("Test color renderer module", () => {
  const colorOne = "#E9695B";
  const colorTwo = "#42ABE3";
  const colorThree = "#F0B541";
  const colorFour = "#1C88BA";

  it("Should render correct color for goal", () => {
    const firstColor = colorRenderer.assignColorForGoal(0);
    const secondColor = colorRenderer.assignColorForGoal(1);
    const thirdColor = colorRenderer.assignColorForGoal(2);
    const fourthColor = colorRenderer.assignColorForGoal(3);

    const fifthColor = colorRenderer.assignColorForGoal(5);
    const sixthColor = colorRenderer.assignColorForGoal(6);

    expect(firstColor).toBe(colorOne);
    expect(secondColor).toBe(colorTwo);
    expect(thirdColor).toBe(colorThree);
    expect(fourthColor).toBe(colorFour);

    expect(fifthColor).toBe(colorTwo);
    expect(sixthColor).toBe(colorThree);
  });
});
