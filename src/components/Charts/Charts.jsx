import React from 'react';
import PieChart from '../PieChart/PieChart';
import CustomBarChart from '../../BarChart/CustomBarChart';
import './Charts.sass';

const Charts = () => {
  return (
    <div className="charts-wrap">
      <CustomBarChart/>
      <PieChart/>
    </div>
  );
};

export default Charts;