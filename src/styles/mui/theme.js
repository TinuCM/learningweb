const { createTheme } = require("@mui/material");
//for light
const background = "#b9ababff";
const Primarycolor = "#046275ff";
const textColor = "#ffffffff";
const secondaryColor = "#cd7f8bff";
const highlightColor = "#996888";

//for dark

const backgroundDark = "#9ac6c6ff";
const PrimarycolorDark = "#825cb1ff";
const textColorDark = "#ec0000ff";
const secondaryColorDark = "#9c5a64ff";
const highlightColorDark = "#dec9d6ff";

let lighttheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: background,
    },
    primary: {
      main: Primarycolor,
    },
    secondary: {
      main: secondaryColor,
    },
    tertiary: {
      main: highlightColor,
    },
    icon: {
      main: textColor,
    },
    error: {
      main: "#e40707ff",
    },
  },
});
let darktheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: backgroundDark,
    },
    primary: {
      main: PrimarycolorDark,
    },
    secondary: {
      main: secondaryColorDark,
    },
    tertiary: {
      main: highlightColorDark,
    },
    icon: {
      main: textColorDark,
    },
    error: {
      main: "#e8ccccff",
    },
  },
});

export { lighttheme, darktheme };
