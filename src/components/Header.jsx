import { AppBar, Toolbar, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import HeaderMenu from "./HeaderMenu";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";

function Header() {
  const theme = useTheme();
  const upMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar position="static">
      <Container>
        <Toolbar sx={{ justifyContent: { md: "center" }, alignItems: 'center' }}>
          <BurgerMenu />
          <Logo />
          {upMD && (
            <>
              <HeaderMenu />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
