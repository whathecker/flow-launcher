import colorRenderer from "../colorRenderer";

describe("Test color renderer module", () => {
  const colorOne = "#E9695B";
  const colorTwo = "#84C5E8";
  const colorThree = "#1C88BA";
  const colorFour = "#F0B541";

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

  it("Should render correct color share per prio bucket - first goal color", () => {
    const highest = colorRenderer.getColorForPrioBucket("#E9695B", "highest");
    const high = colorRenderer.getColorForPrioBucket("#E9695B", "high");
    const mid = colorRenderer.getColorForPrioBucket("#E9695B", "mid");
    const low = colorRenderer.getColorForPrioBucket("#E9695B", "low");
    const na = colorRenderer.getColorForPrioBucket("#E9695B", "n/a");

    expect(highest).toBe("#C2571A");
    expect(high).toBe("#DA621E");
    expect(mid).toBe("#F26D21");
    expect(low).toBe("#F58B4C");
    expect(na).toBe("#FEFEF8");
  });

  it("Should render correct color share per prio bucket - second goal color", () => {
    const highest = colorRenderer.getColorForPrioBucket("#84C5E8", "highest");
    const high = colorRenderer.getColorForPrioBucket("#84C5E8", "high");
    const mid = colorRenderer.getColorForPrioBucket("#84C5E8", "mid");
    const low = colorRenderer.getColorForPrioBucket("#84C5E8", "low");
    const na = colorRenderer.getColorForPrioBucket("#84C5E8", "n/a");

    expect(highest).toBe("#107896");
    expect(high).toBe("#0D9BC3");
    expect(mid).toBe("#2FAFD3");
    expect(low).toBe("#65CBE9");
    expect(na).toBe("#FEFEF8");
  });

  it("Should render correct color share per prio bucket - third goal color", () => {
    const highest = colorRenderer.getColorForPrioBucket("#1C88BA", "highest");
    const high = colorRenderer.getColorForPrioBucket("#1C88BA", "high");
    const mid = colorRenderer.getColorForPrioBucket("#1C88BA", "mid");
    const low = colorRenderer.getColorForPrioBucket("#1C88BA", "low");
    const na = colorRenderer.getColorForPrioBucket("#1C88BA", "n/a");

    expect(highest).toBe("#093145");
    expect(high).toBe("#0D3D56");
    expect(mid).toBe("#0D5275");
    expect(low).toBe("#3C6478");
    expect(na).toBe("#FEFEF8");
  });

  it("Should render correct color share per prio bucket - fourth goal color", () => {
    const highest = colorRenderer.getColorForPrioBucket("#F0B541", "highest");
    const high = colorRenderer.getColorForPrioBucket("#F0B541", "high");
    const mid = colorRenderer.getColorForPrioBucket("#F0B541", "mid");
    const low = colorRenderer.getColorForPrioBucket("#F0B541", "low");
    const na = colorRenderer.getColorForPrioBucket("#F0B541", "n/a");

    expect(highest).toBe("#BCA136");
    expect(high).toBe("#D3B53D");
    expect(mid).toBe("#0D5275");
    expect(low).toBe("#EBC944");
    expect(na).toBe("#FEFEF8");
  });
});
