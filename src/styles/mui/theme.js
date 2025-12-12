const { createTheme } = require("@mui/material")
//for light
const background="#b9ababff"
const Primarycolor="#046275ff"
const textColor="#DCD6F7"
const secondaryColor="#cd7f8bff"
const highlightColor="#996888"

//for dark

const backgroundDark="#35a4a4ff"
const PrimarycolorDark="#beb2cdff"
const textColorDark="#beb6deff"
const secondaryColorDark="#9c5a64ff"
const highlightColorDark="#dec9d6ff"

let theme = createTheme(
    {
        palette: {
            mode:"light",
            background: {
                default:background,
            },
            primary: {
                main:Primarycolor,
            },
            secondary: {
                main:secondaryColor,
            },
            tertiary: {
                main:highlightColor,
            },
            icon: {
                main:textColor,
            },
            error: {
                main:"#e40707ff",
            },
            
        }

    });
    let darktheme = createTheme(
    {
        palette: {
            mode:"dark",
            background: {
                default:backgroundDark,
            },
            primary: {
                main:PrimarycolorDark,
            },
            secondary: {
                main:secondaryColorDark,
            },
            tertiary: {
                main:highlightColorDark,
            },
            icon: {
                main:textColorDark,
            },
            error: {
                main:"#e8ccccff",
            },
            
        }

    });

export { theme, darktheme};