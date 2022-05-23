import React from "react";
// import GroupAddIcon from '@mui/icons-material/GroupAdd';

const Card1 = (props) => {
    return (
    <div className="col-sm-6">
        <div className="card widget-flat">
            <div className="card-body">
            <div className="float-end">
                <i className="bi bi-apple widget-icon" />
            </div>
            <h5 className="text-muted fw-normal mt-0" title="Number of Customers">{props.title}</h5>
            <h3 className="mt-3 mb-3 h3">{props.count}</h3>
            <p className="mb-0 text-muted">
                <span className={props.type} ><i className="mdi mdi-arrow-up-bold" /> {props.percentage}%</span>
                <span className="text-nowrap">Since last month</span>  
            </p>
            </div> {/* end card-body*/}
        </div> {/* end card*/}
    </div>
    );
}

export default Card1;