import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Switch from "@mui/material/Switch";
import calendar from "../../../src/Images/calendar_today-24px (1).svg";
import { Breach } from "../Breach/Breach";
import "./Status.css";

const options = ["Client", "Services"];
const label = { inputProps: { "aria-label": "Switch demo" } };

export const Status = () => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="statusCont">
      <div>
        <div className="heroSection">
          <div className="logoCont">
            <h2>Status Monitor</h2>
            <li className="dateCont">
              <img src={calendar} className="calendarIcon" alt="" />
              <time dateTime="2017-02-14">22 Oct 2020</time>
            </li>
          </div>
          <Switch {...label} className="switchControl" />
        </div>
        <p className="heroText">
          Brief intro to the page functionality will be listed here.
        </p>
      </div>
      <div className="dropdownCont">
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 250, height: 20, fontSize: 14, backgroundColor: "#fff" }}
          renderInput={(params) => (
            <TextField {...params} label="Clients" className="textField" />
          )}
        />
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Service" className="textField" />
          )}
        />
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Task" className="textField" />
          )}
        />
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search" className="textField" />
          )}
        />
      </div>
      <Breach />
    </div>
  );
};
