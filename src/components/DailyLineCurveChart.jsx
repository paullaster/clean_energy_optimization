import React, {useState, useEffect,useRef} from "react";
import * as Echarts from 'echarts';

const DailyLineCurveChart = ({ width, height, options }) => {
 
    const [chart, setChart] = useState(null);
    const chartHolder = useRef(null);

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

  const data = {
    labels,
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
  return <div ref={chartHolder}></div>;
};

export default DailyLineCurveChart;
