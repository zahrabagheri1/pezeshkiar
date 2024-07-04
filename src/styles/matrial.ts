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
      main: "#6f3afa",
      
      "50": " #3a8ef6",
      "100":"#ECF2FC",
      "200":"",
      "300":"",
      "400":"",
      // background-color: linear-gradient(180deg, #6f3afa 0%, #3a8ef6 100%);
      contrastText: "#fff",
    },
    secondary: {
      main: "#6f3afa",
      "50": " #3a8ef6",
      // background-color: linear-gradient(180deg, #6f3afa 0%, #3a8ef6 100%);
      contrastText: "#fff",
    },
  },
});
