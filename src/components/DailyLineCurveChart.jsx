import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

const DailyLineCurveChart = ({ datasets = [] }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: "true",
        text: "Daily Clean Energy Production in Barrels"
      }
    },
    options: {
        scale: {
            y: {
                beginAtZero: true
            }
        }
    }
  };

  const lables = datasets.map((dataset) => {
    console.log(dataset.hour)
    return dataset.hour;
  });

  const plotData = datasets.map((dataset) => {
    console.log(dataset.production)
    return dataset.production;
  });
  const data = {
    lables,
    dataset: [
      {
        lable: "Hourly Clean Energy Levels in Barrels",
        data: plotData,
        borderWidth: 1,
        borderColor: "rgba(255, 25, 5)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      }
    ]
  };
  return <Line options={options} data={data}/>;
};

export default DailyLineCurveChart;
