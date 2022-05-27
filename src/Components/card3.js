import React from "react";
import DonutChart from "./Donutchart";
import {FaSquareFull} from "react-icons/fa";

const Card3 = (props) => {
  return (
    <div className="col-xl-3 col-lg-6 order-lg-1">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="header-title">{props.header}</h4>
            <div className="dropdown">
              <a
                href="/"
                className="dropdown-toggle arrow-none card-drop"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="mdi mdi-dots-vertical"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a href="/" className="dropdown-item">
                  Sales Report
                </a>
                <a href="/" className="dropdown-item">
                  Export Report
                </a>
                <a href="/" className="dropdown-item">
                  Profit
                </a>
                <a href="/" className="dropdown-item">
                  Action
                </a>
              </div>
            </div>
          </div>
          <div>
            <DonutChart />
          </div>
          <div className="chart-widget-list">
            <p>
              <FaSquareFull className="text-primary" />
              {props.name1}
              <span className="float-end">${props.count1}</span>
            </p>
            <p>
            <FaSquareFull className="text-danger" />
              {props.name2}
              <span className="float-end">${props.count2}</span>
            </p>
            <p>
            <FaSquareFull className="text-success" />
              {props.name3}
              <span className="float-end">${props.count3}</span>
            </p>
            <p className="mb-0">
            <FaSquareFull className="text-warning" />
              {props.name4}
              <span className="float-end">${props.count4}</span>
            </p>
          </div>
        </div>{" "}
        {/* end card-body*/}
      </div>{" "}
      {/* end card*/}
    </div>
  );
};
export default Card3;
