import React from "react";

const Timeline = (props) => {
    const Component=props.component
  return (
    <div className="timeline-item">
      <Component className="bg-info-lighten text-info timeline-icon" />
      <div className="timeline-item-info">
        <a href="/" className="text-info fw-bold mb-1 d-block">
          {props.heading}
        </a>
        <small>{props.statement}</small>
        <p className="mb-0 pb-2">
          <small className="text-muted">{props.time}</small>
        </p>
      </div>
    </div>
  );
};

export default Timeline;
