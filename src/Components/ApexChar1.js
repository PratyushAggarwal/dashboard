import React from "react";
import ReactApexChart from "react-apexcharts";
import data from "./data/chartdata.json";

var labelFormatter = function (value) {
  var val = Math.abs(value);
  if (val >= 1000) {
    val = val / 1000 + "K";
  }
  return val;
};

const ApexChart1 = () =>{

  var routeChange = function (index, series) {
    // console.log("hello");
    if(data[series].web[index]){window.open(data[series].web[index])};
  }
  

  const grid = {
    show: true,
    borderColor: "white",
    strokeDashArray: 0,
    position: "back",
    chart: {
      type: "bar",
      height: "300px",
      stacked: true,
      events:{
        click: (event, chartContext, config) =>{
          console.log(event, chartContext, config);
          routeChange(config.dataPointIndex,config.seriesIndex);
        }
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "18%",
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      lines: {
        show: true,
      },
    },
    yaxis: {
      max: 200000,
      tickAmount: 5,
      labels: {
        formatter: labelFormatter,
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ["#727cf5", "#E3EAEF"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
  };
    return (
      <div id="chart">
        <ReactApexChart
          options={grid}
          series={data}
          type="bar"
          height={256}
          width="100%"
        />
      </div>
    );
}

export default ApexChart1;
