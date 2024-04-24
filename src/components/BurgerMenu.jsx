// import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "./DrawerMenu";

import { useState } from "react";

import { IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function BurgerMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const upMD = useMediaQuery(theme.breakpoints.up("md"));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  if (upMD) {
    return null;
  }

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={toggleDrawer}
      >
        {/* <MenuIcon /> */}
        Burger
      </IconButton>
      <DrawerMenu open={drawerOpen} onClose={toggleDrawer} />
    </>
  );
}
