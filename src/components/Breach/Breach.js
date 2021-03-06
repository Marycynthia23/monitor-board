import * as React from "react";
import nb from "../../../src/Images/Ellipse 152.png";
import bd from "../../../src/Images/Ellipse 155.png";
import notb from "../../../src/Images/Group 1377.png";
import brd from "../../../src/Images/Group 1378.png";
import notbrd from "../../../src/Images/Ellipse 156.png";
import breched from "../../../src/Images/Ellipse 157.png";
import "./Breach.css";
import { useState } from "react";
import Cards from "../../customAssets/Cards/Cards";
const data = ["Indigo", "Rainbow", "Client3"];

export const Breach = () => {
  const [leftList, setLeftList] = useState([]);

  const handleServiceRemove = (index) => {
    const list = [...leftList];
    list.splice(index, 1);
    setLeftList(list);
  };

  const handleServiceAdd = () => {
    setLeftList([...leftList, {}]);
  };

  return (
    <div>
      <div className="breachBox">
        <li className="breachList">
          <img src={nb} className="circle" style={{}} alt="" />
          <p className="breachText">Not Breached</p>
        </li>
        <li className="breachList">
          <img src={bd} className="circle" alt="" />
          <p className="breachText">Breached</p>
        </li>
        <li className="breachList">
          <img src={notb} className="circle" alt="" />
          <p className="breachText">Not Breached</p>
        </li>
        <li className="breachList">
          <img src={brd} className="circle" alt="" />
          <p className="breachText"> Breached</p>
        </li>
        <li className="breachList">
          <img src={notbrd} className="circle" alt="" />
          <p className="breachText">Not Breached</p>
        </li>
        <li className="breachList">
          <img src={breched} className="circle" alt="" />
          <p className="breachText"> Breached</p>
        </li>
      </div>
      <div className="cardContainer">
        <div className="cardBox">
          {data.map((item, index) => {
            return <Cards heading={item} key={index} />;
          })}
        </div>
        <div>{leftList}</div>
      </div>
    </div>
  );
};
