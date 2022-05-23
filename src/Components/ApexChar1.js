import { rgbToHex } from "@mui/material";
import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

class ApexChart1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
          series: [{
            name: 'PRODUCT A',
            data: [44000, 55000, 41000, 67000, 22000, 43000],
          }, {
            name: 'PRODUCT B',
            data: [13000, 23000, 20000, 8000, 13000, 27000]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: false
              }
            },
            responsive: [{
            //   breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr',
                'May', 'Jun'
              ],
            },
            legend: {
              position: 'right',
              offsetY: 400
            },
            fill: {
              opacity: 1
            }
          },
          grid: {
            show: true,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            position: 'back',
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                  show: false
                }
            },
            plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '10%',
                },
              },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr',
                'May', 'Jun'
              ],
                lines: {
                    show: true
                }
            },
            colors: ['#727cf5','#6C757D'],   
            padding: {
                top: 100,
                right: 100,
                bottom: 0,
                left: 0
            },  
        }
        
        
        };
      }

    

      render() {
        return (
          

    <div id="chart">
        <ReactApexChart options={this.state.grid} series={this.state.series} type="bar" height={350} />
    </div>
        );
    }
}

export default ApexChart1;