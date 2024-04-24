import {
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Colors } from "../styles";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function HouseInfo({ open, onClose, data }) {
	
  return (
    <Drawer
      anchor="right"
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
        <ListItem>
            {data ? data.name : 'hello'}
        </ListItem>
        <ListItem>
            {data ? data.description : 'hello'}
        </ListItem>
        <ListItem>
          <img src={data ? data.img : 'https://http.cat/404'}/>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default HouseInfo;
