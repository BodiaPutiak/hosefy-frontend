import { Fragment } from "react";
import {
  Drawer,
  List,
  ListItemText,
  Divider,
  ListItemButton,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Colors } from "../styles";
import { NESTED_ITEM } from "./HeaderMenu";

const pages = ["Home", NESTED_ITEM, "Login", "Contact Us"];
const nestedPages = ["Blog", "News Letter"];

const MenuItem = ({ page }) => (
  <>
    <ListItemButton>
      <ListItemText primary={page} />
    </ListItemButton>
    <Divider />
  </>
);

function DrawerMenu({ open, onClose }) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          width: "50vw",
          background: Colors.primary,
        },
      }}
    >
      <List>
        {pages.map((page) => {
          if (page === NESTED_ITEM) {
            return (
              <Fragment key={page}>
                <Accordion>
                  <AccordionSummary>
                  {/* <AccordionSummary expandIcon={<ExpandMoreIcon />}> */}
                    <Typography>{NESTED_ITEM}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List component="div" disablePadding>
                      {nestedPages.map((page) => (
                        <MenuItem key={page} page={page} />
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Fragment>
            );
          }

          return <MenuItem key={page} page={page} />;
        })}
      </List>
    </Drawer>
  );
}

export default DrawerMenu;
