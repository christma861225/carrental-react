import React from "react";
import Chart from "react-apexcharts";
import "./index.scss";

const UserEngagement = () => {
  const chartData = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ["01", 10, 11, 12, 14, 15, 16, 18, 19, 20, 21, 30],
        axisBorder: {
          show: true,
          color: "#2F83EB",
          height: 3,
          width: "100%",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: "#2F83EB",
          width: 3,
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 5,
        hover: {
          size: 9,
        },
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 0,
            size: 0, 
          },
        ],
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        show: false,
      },
      fill: {
        colors: ["#C0D9F9"],
        type: "solid",
      },
    },
    series: [
      {
        name: "series-1",
        data: [134, 68, 117, 158, 32, 111, 168, 197, 112, 132, 87, 123],
      },
    ],
  };

  return (
    <div className="user-engagement">
      <div className="toolbar">
        <p className="title">User Engagement</p>
        <select>
          <option>Sort by : Month</option>
        </select>
      </div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={240}
      />
    </div>
  );
};

export default UserEngagement;
