import React from 'react'
import { HourlyEnergyCurve } from './components';
import HourlyEnergyData from './db/daily_energy_stat.json';

const App = () => {
  
  const lables = HourlyEnergyData.map((dataset) => {
    console.log(dataset.hour)
    return dataset.hour;
  });
  
  return (
    <HourlyEnergyCurve lables={lables} />
  )
}

export default App