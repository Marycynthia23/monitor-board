import React from "react";
import "./ProgressTrack.css";

export const ProgressDisplay = () => {
  return (
    <div>
      <div className="progressBox">
        <div className="progressItem">
          <h6>Not Started</h6>
          <div className="notStarted">
            <div className="red">2</div>
            <div className="grey">5</div>
          </div>
        </div>
        <div className="progressItem">
          <h6>In Progress</h6>
          <div className="inProgess">
            <div className="red">2</div>
            <div className="grey">5</div>
          </div>
        </div>
        <div className="progressItem">
          <h6>Completed</h6>
          <div className="completed">
            <div className="red">2</div>
            <div className="grey">5</div>
          </div>
        </div>
      </div>
    </div>
  );
};
