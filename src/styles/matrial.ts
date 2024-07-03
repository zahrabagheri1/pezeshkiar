import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazirmatn",
    allVariants: {
      color: "black",
    },
  },
  palette: {
    primary: {
      main: "#02B3C4",
      "50": "#ecfeff",
      "100": "#cffafe",
      "200": "#a5f3fc",
      "300": "#67e8f9",
      "400": "#22d3ee",
      "500": "#06b6d4",
      "600": "#0891b2",
      "700": "#0e7490",
      "800": "#155e75",
      "900": "#164e63",
      contrastText: "#fff",
    },
  },
});
