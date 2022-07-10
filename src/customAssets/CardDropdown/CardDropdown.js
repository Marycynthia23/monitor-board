import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import { ProgressDisplay } from "../ProgressTrack/ProgressTrack";

export const CardDropdown = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Accounting" />
          {open ? <ExpandLess /> : <ExpandMore />}
          <ProgressDisplay />
          <br />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Reconciliation" />
          {open ? <ExpandLess /> : <ExpandMore />}
          <ProgressDisplay />
          <br />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Financial Reporting" />
          {open ? <ExpandLess /> : <ExpandMore />}
          <ProgressDisplay />
          <br />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
          <ProgressDisplay />
          <br />
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemButton sx={{ marginLeft: "0px" }}>
              <ul>
                <li className="dropDownList">
                  <div className="dropDownItem">
                    <p className="itemText">CASH RECON WITH CP - CASH</p>
                    <MoreVertIcon />
                  </div>
                  <div className="buttonDiv">
                    <Button variant="contained" className="btnStyle">
                      Breached/failed
                    </Button>
                    <p className="btnText">SLA: 20 Jul 2020, 9:10 AM</p>
                  </div>
                </li>
              </ul>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
};
