import { Box } from "@mui/material";
import { styled } from "@mui/system";
const LogoStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  fontSize: "40px",
  fontWeight: "bold",

  [theme.breakpoints.down("md")]: {
    justifySelf: "center",
    
  },
}));

export default function Logo() {
  return (
    <LogoStyled>
      .housefy
    </LogoStyled>
  );
}
