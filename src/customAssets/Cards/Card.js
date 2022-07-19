import React, { useState } from "react";
// import arrowDown from "../../Images/expand_less-24px (2)@2x.png";
import dots from "../../Images/3dots.png";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";

import "./Card.css";

const CardList = () => {
  return (
    <div>
      <div className="listCont">
        <div className="textCont">
          <p className="listText">CASH RECON WITH CP - CASH</p>
          <img src={dots} alt="" />
        </div>
        <div className="textCont">
          <button className="buttonRed"> BREACHED/FAILED</button>
          <p className="listText">SLA: 20 Jul 2020, 9:10 AM</p>
        </div>
      </div>
      <div className="listContYellow">
        <div className="textCont">
          <p className="listText">CASH RECON WITH CP - CASH</p>
          <img src={dots} alt="" />
        </div>
        <div className="textCont">
          <button className="buttonGrey">TO BE STARTED</button>
          <p className="listText">SLA: 20 Jul 2020, 9:10 AM</p>
        </div>
      </div>
      <div className="listCont">
        <div className="textCont">
          <p className="listText">CASH RECON WITH CP - CASH</p>
          <img src={dots} alt="" />
        </div>
        <div className="textCont">
          <button className="buttonGrey">TO BE STARTED</button>
          <p className="listText">SLA: 20 Jul 2020, 9:10 AM</p>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (prevState) => {
    setOpen((prevState) => !prevState);
    console.log(prevState);
  };

  return (
    <div className="card">
      <div className="cardItem">
        <div className="cardTitle" onClick={handleClick}>
          <ListItemText primary={title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </div>
        <div className="cardDetails">
          <div>
            <p className="cardInfo">Not started</p>
            <button className="btnRed">2</button>
            <button className="btnGrey">8</button>
          </div>
          <div>
            <p className="cardInfo">In Progress</p>
            <button className="btnRed">5</button>
            <button className="btnGrey">10</button>
          </div>
          <div>
            <p className="cardInfo">Completed</p>
            <button className="btnRed">2</button>
            <button className="btnGreen">8</button>
          </div>
        </div>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 0 }}>
            <CardList />
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  );
};

export default Card;
