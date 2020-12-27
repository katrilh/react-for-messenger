// @ts-ignore
import preset from "@rebass/preset";

export const theme = {
  ...preset,
  colors: {
    ...preset.colors,
    primary: "#4C7D60",
    secondary: "#384960",
    muted: "#A9BCB0",
  },
  box: {
    outline: {
      mx: "auto",
      variant: "box.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 2px",
    },
  },
  fonts: {
    body: "sans-serif",
    heading: "sans-serif",
    monospace: "monospace",
  },
};
