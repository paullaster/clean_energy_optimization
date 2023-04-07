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

const DailyLineCurveChart = () => {
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
            
        }
    }
  };
  return <div>DailyLineCurveChart</div>;
};

export default DailyLineCurveChart;
