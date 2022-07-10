import * as React from "react";
import pin from "../../Images/push_pin-24px (1).png";
import { CardDropdown } from "../CardDropdown/CardDropdown";
import "./Cards.css";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export const Cards = () => {
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6]);

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items) => (
    <Paper>
      <List dense component="div" role="list">
        {items.map((value) => {
          return (
            <div className="cards" key={value}>
              <div className="cardHeaderBox">
                <h4 className="cardsHeading">Indigo</h4>
                <img className="solidPin" src={pin} alt="" />
              </div>
              <CardDropdown />
            </div>
          );
        })}
      </List>
    </Paper>
  );

  return (
    <div style={{ display: "flex", marginRight: "20px" }}>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "row",
          marginRight: "20px",
          backgroundColor: "pink",
          padding: "10px",
          overflow: "auto",
        }}
      >
        <Grid item>{customList(left)}</Grid>
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          size="small"
          onClick={handleAllRight}
          disabled={left.length === 0}
          aria-label="move all right"
        >
          ≫
        </Button>
      </div>
      <div style={{ marginRight: "20px" }}>
        <Grid item>{customList(right)}</Grid>
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          size="small"
          onClick={handleAllLeft}
          disabled={right.length === 0}
          aria-label="move all left"
        >
          ≪
        </Button>
      </div>
    </div>
  );
};
