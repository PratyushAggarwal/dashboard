import { rgbToHex } from "@mui/material";
import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

class ApexChart1 extends Component {
  constructor(props) {
    super(props);

    var labelFormatter = function (value) {
      var val = Math.abs(value);
      if (val >= 1000) {
        val = val / 1000 + "K";
      }
      return val;
    };

    this.state = {
      series: [
        {
          name: "PRODUCT A",
          data: [
            144000, 55000, 41000, 67000, 22000, 43000, 144000, 55000, 41000,
            67000, 22000, 43000,
          ],
        },
        {
          name: "PRODUCT B",
          data: [
            53000, 83000, 40000, 38000, 93000, 127000, 13000, 93000, 120000,
            18000, 113000, 27000,
          ],
        },
      ],
      grid: {
        show: true,
        borderColor: "white",
        strokeDashArray: 0,
        position: "back",
        chart: {
          type: "bar",
          height: "300px",
          stacked: true,
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
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.grid}
          series={this.state.series}
          type="bar"
          height={256}
          width="100%"
        />
      </div>
    );
  }
}

export default ApexChart1;
