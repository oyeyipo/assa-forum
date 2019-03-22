import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, teal, lime, amber } from "@material-ui/core/colors";

const Theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber,
    error: deepOrange,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
    // type: "dark"
  },
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 10,
    useNextVariants: true
  }
});
export default Theme;
