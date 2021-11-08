import React from 'react';
import CustomPieChart from '../PieChart/CustomPieChart';
import CustomBarChart from '../BarChart/CustomBarChart';
import './Charts.sass';

const Charts = () => {
  return (
    <div className="charts-wrap">
      <CustomBarChart/>
      <CustomPieChart/>
    </div>
  );
};

export default Charts;