import React from "react";

const ProgressBar = (props) => {
  const Childdiv = {
    width: `${props.progress}%`,
  };
  return (
    <div>
      <h5 className="mb-1 mt-0 fw-normal">{props.name}</h5>
      <div className="progress-w-percent">
        <span className="progress-value fw-bold">{props.progress}k</span>
        <div className="progress progress-sm">
          <div
            className="progress-bar"
            role="progressbar"
            style={Childdiv}
            aria-valuenow={props.progress}
            aria-valuemin="0"
            area-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
