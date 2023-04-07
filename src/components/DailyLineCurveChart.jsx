import React from "react";
import {
  chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chartjs";
import { Line } from "react-chartjs-2";

const DailyLineCurveChart = ({datasets, }) => {
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
            position: 'top',
        },
        title: {
            display: 'true',
            text: 'Daily Clean Energy Production in Barrels',
        }
    },
  };

  const lables = datasets.map( (dataset) => {
    return dataset.hour;
  })
  return <div>DailyLineCurveChart</div>;
};

export default DailyLineCurveChart;
