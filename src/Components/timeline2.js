import React from "react";

const Timeline2 = (props) => {
    const Component=props.component
  return (
    <div className="timeline-item">
      <Component className="bg-primary-lighten text-primary timeline-icon" />
      <div className="timeline-item-info">
        <a href="/" className="text-primary fw-bold mb-1 d-block">
          {props.heading}
        </a>
        <small>
          {props.statement}
          <span className="fw-bold">{props.statement2}</span>
        </small>
        <p className="mb-0 pb-2">
          <small className="text-muted">{props.time}</small>
        </p>
      </div>
    </div>
  );
};

export default Timeline2;
