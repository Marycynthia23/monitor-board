import { useState } from "react";
import pin from "../../Images/push_pin-24px (1).png";
import emptypin from "../../Images/removepin.png";
// import { CardDropdown } from "../CardDropdown/CardDropdown";
import Card from "./Card";
import "./Cards.css";
// import Grid from "@mui/material/Grid";
// import List from "@mui/material/List";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";

const data = [
  "Accounting",
  "Reconciliation",
  "Financial Reporting",
  "Middle Office",
];

const Cards = ({ heading }) => {
  // const [serviceList, setServiceList] = useState([{ service: "" }]);

  // const handleServiceRemove = (index) => {
  //   const list = [...serviceList];
  //   list.splice(index, 1);
  //   setServiceList(list);
  // };

  // const handleServiceAdd = () => {
  //   setServiceList([...serviceList, { service: "" }]);
  // };
  return (
    <div className="cards">
      <div className="cardContainer">
        <div className="firstContainer">
          <div className="cardHeaderBox">
            <h4 className="cardsHeading">{heading}</h4>

            <img
              className="solidPin"
              src={pin}
              // onClick={handleServiceAdd}
              alt=""
            />
          </div>
          {data.map((item, index) => {
            return <Card title={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
