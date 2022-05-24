import { rgbToHex } from "@mui/material";
import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

function generateDayWiseTimeSeries(s, count) {
    var values = [[
      8,3,10,4,29,19,23
    ], [
      12,1,17,7,19,16,26
    ]];
    var i = 0;
    var series = [];
    var x = new Date("11 Nov 2012").getTime();
    x+=21600000;
    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }
    return series;
  }

class ApexChart2 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            name: 'Total Views',
            data: generateDayWiseTimeSeries(0, 7)
          }, {
            name: 'Unique Views',
            data: generateDayWiseTimeSeries(1, 7)
          }],
        options: {
          chart: {
            type: 'line',
            height: 256,
            foreColor: "#999",
            dropShadow: {
            enabled: true,
            enabledSeries: [1],
            top: -4,
            left: 3,
            blur: 7,
            opacity: 0.25
            },
            toolbar: {
                show: false
            }
          },
          colors: ['#00E396', '#0090FF'],
          stroke: {
            curve: "smooth",
            width: 4
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
            strokeColor: "#fff",
            strokeWidth: 2,
            strokeOpacity: 1,
            fillOpacity: 1,
            hover: {
              size: 6
            }
          },
          xaxis: {
            type: "datetime",
            tickPlacement:'on',
            min: new Date("11 Nov 2012").getTime(),
            max: new Date("18 Nov 2012").getTime()-43200000,
            labels: {
                datetimeFormatter: {
                    day:'dd MMM'
                },
                
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: true
            },
            tooltip: {
                enabled: false
            }

          },
          yaxis: {
            labels: {
              offsetX: 14,
              offsetY: 0
            },
          },
          grid: {
            padding: {
              left: 10,
              right: 5
            }
          },
          tooltip: {
            x: {
              format: "dd MMM yyyy"
            },
          },
          legend: {
            position: 'right',
            offsetY: 400
          },
          fill: {
            type: "solid",
            fillOpacity: 0.8
          }
        },
      };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} height={364} />
            </div>
        );
    }
}

export default ApexChart2;