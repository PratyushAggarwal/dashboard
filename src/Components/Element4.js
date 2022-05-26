import React from "react";

const Elements = (props) => {
  return (
    <tr>
      <td>
        <h5 className="font-14 my-1 fw-normal">{props.name}</h5>
        <span className="text-muted font-13">{props.date}</span>
      </td>
      <td>
        <h5 className="font-14 my-1 fw-normal">{props.price}</h5>
        <span className="text-muted font-13">Price</span>
      </td>
      <td>
        <h5 className="font-14 my-1 fw-normal">{props.quantity}</h5>
        <span className="text-muted font-13">Quantity</span>
      </td>
      <td>
        <h5 className="font-14 my-1 fw-normal">{props.amount}</h5>
        <span className="text-muted font-13">Amount</span>
      </td>
    </tr>
  );
};

export default Elements;
