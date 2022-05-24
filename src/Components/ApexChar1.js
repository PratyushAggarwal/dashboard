import { rgbToHex } from "@mui/material";
import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

class ApexChart1 extends Component {
    constructor(props) {
        super(props);

      var labelFormatter = function(value) {
        var val = Math.abs(value);
        if (val >= 1000) {
          val = (val / 1000) + "K";
        }
        return val;
      };

        this.state = {
          series: [{
            name: 'PRODUCT A',
            data: [44000, 55000, 41000, 67000, 22000, 43000,44000, 55000, 41000, 67000, 22000, 43000],
          }, {
            name: 'PRODUCT B',
            data: [13000, 23000, 20000, 8000, 13000, 27000, 13000, 23000, 20000, 8000, 13000, 27000]
          }],
          grid: {
            show: true,
            borderColor: 'white',
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
                  columnWidth: '20%',
                },
              },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
                lines: {
                    show: true
                }
            },
            yaxis: {
              max: 200000,
              tickAmount: 5,
              labels: {
                formatter: labelFormatter,
              }
            },
            fill: {
              opacity: 0.8
            },
            colors: ['#727cf5','#6C757D'],   
            legend: {
              position: 'right',
              offsetY: 400
            },
            dataLabels: {
              enabled: false,
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