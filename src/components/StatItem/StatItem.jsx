import React from 'react';
import { ReactSVG } from 'react-svg';
import AnimatedNumber from "animated-number-react";
import './StatItem.sass';

const StatItem = ({icon, title, value, color}) => {
  const formatValue = (value) => value.toFixed(0) + '%';
  return (
    <div className="stat-item">
      <ReactSVG src={icon} wrapper={'span'} className="stat-item-icon" />
      <div className="stat-item-title">{title}</div>
      <div className="stat-item-value" style={{color: color}}>
        <AnimatedNumber
          value={value}
          formatValue={formatValue}
          duration={1000}
        />
      </div>
    </div>
  );
};

export default StatItem;