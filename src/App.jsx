import React from "react";
import { HourlyEnergyCurve } from "./components";
import HourlyEnergyData from "./db/daily_energy_stat.json";

const App = () => {
  // const lables = HourlyEnergyData.hourly_production.map((dataset) => {
  //   console.log(dataset.hour)
  //   return dataset.hour;
  // });

  // const plotData = HourlyEnergyData.hourly_production.map((dataset) => {
  //   console.log(dataset.production)
  //   return dataset.production;
  // });
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true
      }
    ]
  };
  return <HourlyEnergyCurve width='500px' height='500px' option={option} />;
};

export default App;
