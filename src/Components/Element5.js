import React from "react";

const Element5 = (props) => {
  return (
    <div class="timeline-item">
      <i class="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
      <div class="timeline-item-info">
        <a href="/" class="text-info fw-bold mb-1 d-block">
          {props.doer}
        </a>
        <small>{props.activity}</small>
        <p class="mb-0 pb-2">
          <small class="text-muted">{props.time}</small>
        </p>
      </div>
    </div>
  );
};

export default Element5;
