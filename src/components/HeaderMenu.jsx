import { Button, Menu, MenuItem, Stack, useMediaQuery, Box, TextField } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export const NESTED_ITEM = "Options";
export const pages = ["Home", "Favorites", NESTED_ITEM, "Login"];
const nestedPages = ["Profile", "My account", "Logout", "Blog"];

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const theme = useTheme();
  const betweenMDAndLG = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Stack sx={{justifyContent: 'center', alignItems: 'center'}} direction="row" flexGrow={1} gap={betweenMDAndLG ? 2 : 4}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25rem' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </Box>
      {pages.map((page) => {
        if (page === NESTED_ITEM) {
          return (
            <div key={page}>
              <Button
                onClick={handleMenuOpen}
                sx={{ my: 2 }}
              >
                {page}
              </Button>
              <Menu anchorEl={anchorEl} open={open}>
                {nestedPages.map((page) => (
                  <MenuItem key={page} onClick={handleMenuClose}>
                    {page}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          );
        }

        return (
          <Button key={page} sx={{ my: 2, display: "block" }}>
            {page}
          </Button>
        );
      })}
    </Stack>
  );
}
