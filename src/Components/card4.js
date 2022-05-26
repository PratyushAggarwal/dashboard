import React from "react";
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Elements from "./Element4";

const Card4 = (props) => {
  return (
    <div className="col-xl-6 col-lg-12 order-lg-2 order-xl-1">
      <div class="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4 className="header-title">Top Selling Products</h4>
            <a href="javascript:void(0);" className="btn btn-sm btn-link">
              Export <i class="mdi mdi-download ms-1"></i>
            </a>
          </div>
          <div className="table-responsive">
            <table className="table table-centered table-nowrap table-hover mb-0">
              <tbody>
                <Elements
                  name="ASOS Ridley High Waist"
                  date="07 April 2018"
                  price="$79.49"
                  quantity="82"
                  amount="$6,518.18"
                />
                <Elements
                  name="Marco Lightweight Shirt"
                  date="25 March 2018"
                  price="$128.50"
                  quantity="37"
                  amount="$4,754.50"
                />
                <Elements
                  name="Half Sleeve Shirt"
                  date="17 March 2018"
                  price="$39.99"
                  quantity="64"
                  amount="$$2,559.36"
                />
                <Elements
                  name="Lightweight Jacke"
                  date="12 March 2018"
                  price="$20.00"
                  quantity="184"
                  amount="$3,680.00"
                />
                <Elements
                  name="Marco Shoes"
                  date="05 March 2018"
                  price="$28.49"
                  quantity="69"
                  amount="$1,965.81"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card4;