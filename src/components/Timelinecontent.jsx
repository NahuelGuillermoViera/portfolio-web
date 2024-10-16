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
        
        <div className="contain">
          {props.context}
        </div>
      </div>
    </div>
  );
};

export default Timelinecontent;
