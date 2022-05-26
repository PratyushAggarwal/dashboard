import React from "react";
import DonutChart from "./Donutchart";
import Donutchart from './Donutchart';

const Card3 = (props) => {
    return (
    <div className="col-xl-3 col-lg-6 order-lg-1">
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className="header-title">{props.header}</h4>  
                    <div className="dropdown">
                            <a  className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                             <i class="mdi mdi-dots-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">                                 
                                <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>                
                                <a href="javascript:void(0);" className="dropdown-item">Export Report</a>                                              
                                <a href="javascript:void(0);" className="dropdown-item">Profit</a>                                           
                                <a href="javascript:void(0);" className="dropdown-item">Action</a>
                            </div>
                        </div>
                    </div>
                <div>
                <DonutChart />
                </div>
                <div className="chart-widget-list">
                     <p>
                        <i className="mdi mdi-square text-primary"></i>{props.name1}
                          <span className="float-end">${props.count1}</span>
                          </p>
                          <p>
                          <i className="mdi mdi-square text-danger"></i>{props.name2}
                          <span className="float-end">${props.count2}</span>
                    </p>
                    <p>
                          <i className="mdi mdi-square text-success"></i>{props.name3}
                          <span className="float-end">${props.count3}</span>
                    </p>
                    <p className="mb-0">
                          <i className="mdi mdi-square text-warning"></i>{props.name4}
                          <span className="float-end">${props.count4}</span>
                    </p>
                </div>                          
            </div> {/* end card-body*/}
        </div> {/* end card*/} 
    </div>
    );
}
export default Card3;


