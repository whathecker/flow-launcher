type Colors = {
  text: string;
  whiteText: string;
  subtleLabel: string;
  background: string;
  defaultBorder: string;
  activeBorder: string;
  primaryBtn: string;
  overlay: string;
};

const mainCTAColor = "#0FA858";

//TODO: restructure the object to color names rather than the placement
export const light: Colors = {
  text: "#000000",
  whiteText: "#fff",
  subtleLabel: "#848484",
  background: "#fff",
  defaultBorder: "#636262",
  activeBorder: mainCTAColor,
  primaryBtn: mainCTAColor,
  overlay: "#3a3a39",
};

export const dark: Colors = {
  text: "#000000",
  whiteText: "#fff",
  subtleLabel: "#848484",
  background: "#fff",
  defaultBorder: "#636262",
  activeBorder: mainCTAColor,
  primaryBtn: mainCTAColor,
  overlay: "#3a3a39",
};
