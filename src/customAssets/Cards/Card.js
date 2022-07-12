import React, { useState } from "react";
import arrowDown from "../../Images/expand_less-24px (2)@2x.png";
import dots from "../../Images/3dots.png";

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
          <button>Breached/Failed</button>
          <p className="listText">SLA: 20 Jul 2020, 9:10 AM</p>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title }) => {
  const [open, setOpen] = useState(false);
  const toggleArrow = (prevState) => {
    setOpen((prevState) => !prevState);
    console.log(prevState);
  };

  return (
    <div className="card">
      <div className="cardItem">
        <div className="cardTitle">
          <h4>{title}</h4>
          <img
            src={arrowDown}
            onClick={() => toggleArrow(open)}
            alt="arrow-down"
            style={{ width: "30px" }}
          />
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
      <hr />
      {
        // open && <CardList />
      }
      {open ? <CardList /> : null}
    </div>
  );
};

export default Card;
