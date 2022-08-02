import React from "react";
import Chart from "react-apexcharts";
import "./index.scss";

const ActiveRatio = () => {
  const chartValue = 75;
  const chartData = {
    series: [chartValue],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: 5,
            size: "65%",
            background: "transparent",
            position: "front",
          },
          track: {
            inverseOrder: true,
            startAngle: 0,
            endAngle: 360,
            background: "#DFE7ED",
            strokeWidth: "70%",
          },
          dataLabels: {
            show: false,
          },
        },
      },
      fill: {
        colors: ["#2F83EB"],
      },
      stroke: {
        lineCap: "round",
      },
    },
  };
  return (
    <div className="active-ratio">
      <div className="chart">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="radialBar"
          height={350}
        />
      </div>
      <div className="value">
        <span>{chartValue}</span>
        <span>%</span>
      </div>
    </div>
  );
};

export default ActiveRatio;
