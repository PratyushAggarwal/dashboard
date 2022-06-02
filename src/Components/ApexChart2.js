import React from "react";
import ReactApexChart from "react-apexcharts";
import data from "./data/revenue.json"

function generateDayWiseTimeSeries(s, count) {
  var values = data;
  var i = 0;
  var series = [];
  var x = new Date()-12*43200000;
  x=x-35800000;
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 86400000;
    i++;
  }
  return series;
}

var routeChange = function (index) {
  console.log("hello");
  window.open("https://www.youtube.com/watch?v=kMUdvZLljpM");
}

const series = [
  {
    name: "Total Views",
    data: generateDayWiseTimeSeries(0, 7),
  },
  {
    name: "Unique Views",
    data: generateDayWiseTimeSeries(1, 7),
  },
];

const option = {
  chart: {
    type: "line",
    foreColor: "#999",
    events:{
      click: (event, chartContext, config) =>{
        console.log(event, chartContext, config);
        routeChange(config.dataPointIndex);
      }
    },
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -4,
      left: 3,
      blur: 7,
      opacity: 0.35,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#00E396", "#0090FF"],
  stroke: {
    curve: "smooth",
    width: 4,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    strokeColor: "#fff",
    strokeWidth: 2,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6,
    },
  },
  xaxis: {
    type: "datetime",
    tickPlacement: "on",
    min: new Date()-13*43200000,
    max: new Date().getTime(),
    labels: {
      datetimeFormatter: {
        day: "dd MMM",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: true,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: 0,
      offsetY: 1,
    },
  },
  grid: {
    padding: {
      left: 10,
      right: 5,
    },
  },
  legend: {
    position: "right",
    offsetY: 900,
  },
  fill: {
    type: "solid",
    fillOpacity: 0.8,
  },
};

const ApexChart2 = () => {
    return (
      <div id="chart">
        <ReactApexChart
          options={option}
          series={series}
          height={356}
        />
      </div>
    );
}

export default ApexChart2;
