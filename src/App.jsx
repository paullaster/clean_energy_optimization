import React from 'react'
import { HourlyEnergyCurve } from './components';
import HourlyEnergyData from './db/daily_energy_stat.json';

const App = () => {
  
  // const lables = HourlyEnergyData.hourly_production.map((dataset) => {
  //   console.log(dataset.hour)
  //   return dataset.hour;
  // });
  
  // const plotData = HourlyEnergyData.hourly_production.map((dataset) => {
  //   console.log(dataset.production)
  //   return dataset.production;
  // });
  const  lables = ['o', 'l', 'k', 'm', 'u'];
 const plotData = [
    1,2,3,4,5,
 ]
  return (
    <HourlyEnergyCurve lables={lables} plotData={plotData} />
  )
}

export default App