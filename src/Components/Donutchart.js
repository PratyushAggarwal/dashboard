import { rgbToHex } from "@mui/material";
import { width } from "@mui/system";
import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

class ApexChart1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [17, 41, 55, 44],
      grid: {
        chart: {
          type: "donut",
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: 0,
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: true,
          background: {
            enabled: false,
          },
        },
        labels: ["E-mail", "Sponsored", "Affiliate", "Direct"],
        plotOptions: {
          pie: {
            customScale: 1,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.grid}
          series={this.state.series}
          type="donut"
          height={205.7}
        />
      </div>
    );
  }
}

export default ApexChart1;
