import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#01AB41",
    },
    snow: {
      main: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default {
  theme,
};
