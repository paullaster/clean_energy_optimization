import React from 'react'
import { HourlyEnergyCurve } from './components',
import HourlyEnergyData from './db/daily_energy_stat.json';

const App = () => {
  return (
    <HourlyEnergyCurve datasets={HourlyEnergyData.hourly_production} />
  )
}

export default App