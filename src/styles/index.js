import { createTheme } from "@mui/material";

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};

export const overrides = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  paper: {
    background: Colors.primary,
  },
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    success: {
      main: Colors.success,
    },
    info: {
      main: Colors.info,
    },
    warning: {
      main: Colors.warning,
    },
    error: {
      main: Colors.danger,
    },
    text: {
      primary: Colors.dark,
      secondary: Colors.light,
      disabled: Colors.muted,
      hint: Colors.shaft,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.white,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: Colors.black,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: "0px",
          "&.Mui-expanded": {
            margin: "0px",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
          backgroundColor: Colors.body_bg,
        },
        img: {
          height: "auto",
          maxWidth: "100%",
          objectFit: "cover",
        },
        ul: {
          listStyle: "none",
          padding: 0,
        },
      },
    },
  },
};

const theme = createTheme(overrides);
export default theme;
