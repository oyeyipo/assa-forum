import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, teal, amber } from "@material-ui/core/colors";

const Theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber,
    error: deepOrange,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    htmlFontSize: 10,
    useNextVariants: true
  },
  grey: {
    light_1: "#faf9f9",
    light_2: "#f4f2f2",
    light_3: "#f0eeee",
    light_4: "#ccc",

    dark_1: "#333",
    dark_2: "#777",
    dark_3: "#999"
  }
});
export default Theme;
