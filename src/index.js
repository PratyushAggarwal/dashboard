import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card1s from "./Components/Card1s";
import Router1 from "./Components/Sidebar/Router";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="wrapper">
    <Router1 />
    {/* <div className="content-page">
      <div className="content">
        <Card1s />
      </div>
    </div> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
