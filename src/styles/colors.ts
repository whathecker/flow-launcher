const colors: Record<string, string> = {
  strongBlack: "#2A2A2B",
  subtleBlack: "#554F4F",
  strongWhite: "#fff",
  subtleWhite: "to_be_defiined",
  primaryBrand: "#0FA858",
  subtleGray: "#848484",
  strongDarkGray: "#3a3a39",
  subtleRed: "#c84827",
  subtleBeige: "#FEFEF8",
};

type ColorPlacement = {
  background: string;
  textOnBackgroundForRead: string;
  textOnBackgroundForWrite: string;
  labelOnBackgroundForRead: string;
  textOnColorForRead: string;
  defaultBorder: string;
  activeBorder: string;
  primaryBtn: string;
  overlay: string;
  errorMsg: string;
  emptyPrioBucket: string;
};

export const light: ColorPlacement = {
  background: colors.strongWhite,
  textOnBackgroundForRead: colors.subtleBlack,
  textOnBackgroundForWrite: colors.strongBlack,
  labelOnBackgroundForRead: colors.subtleGray,
  textOnColorForRead: colors.strongWhite,
  defaultBorder: colors.subtleGray,
  activeBorder: colors.primaryBrand,
  primaryBtn: colors.primaryBrand,
  overlay: colors.strongDarkGray,
  errorMsg: colors.subtleRed,
  emptyPrioBucket: colors.subtleBeige,
};

export const dark: ColorPlacement = {
  background: colors.strongWhite,
  textOnBackgroundForRead: colors.subtleBlack,
  textOnBackgroundForWrite: colors.strongBlack,
  labelOnBackgroundForRead: colors.subtleGray,
  textOnColorForRead: colors.strongWhite,
  defaultBorder: colors.subtleGray,
  activeBorder: colors.primaryBrand,
  primaryBtn: colors.primaryBrand,
  overlay: colors.strongDarkGray,
  errorMsg: colors.subtleRed,
  emptyPrioBucket: colors.subtleBeige,
};
