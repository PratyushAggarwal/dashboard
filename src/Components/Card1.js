import React from "react";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
// import GroupAddIcon from '@mui/icons-material/GroupAdd';

const Card1 = (props) => {
  return (
    <div className="col-sm-6 border-boxing">
      <div className="card widget-flat">
        <div className="card-body">
          <div className="float-end">
            <props.component className="widget-icon" />
          </div>
          <h5 className="text-muted fw-normal mt-0" title="Number of Customers">
            {props.title}
          </h5>
          <h3 className="mt-3 mb-3 h3">{props.count}</h3>
          <p className="mb-0 text-muted">
            <span
              className={
                props.increasing === "true"
                  ? "text-success me-2"
                  : "text-danger me-2"
              }
            >
              {props.increasing === "true" ? <GoArrowUp /> : <GoArrowDown />}
              {props.percentage}%
            </span>
            <span className="text-nowrap">Since last month</span>
          </p>
        </div>
        {/* end card-body*/}
      </div>
      {/* end card*/}
    </div>
  );
};

export default Card1;
