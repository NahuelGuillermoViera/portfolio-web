import React from "react";

const Timelinecontent = (props) => {
  return (
    <div className="timelinecontent">
      <span className="dot"></span>
      <div className="concept">
        <div className="timeline-head">
          <p className="title">{props.title}</p>
          <p className="date">{props.fecha}</p>
        </div>

        <p className="contain">
          {props.context}
        </p>
      </div>
    </div>
  );
};

export default Timelinecontent;
