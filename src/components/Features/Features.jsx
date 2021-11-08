import React, {useEffect, useState} from 'react';
import FeatureBlock from '../FeatureBlock/FeatureBlock';
import BusinessIcon from '@mui/icons-material/Business';
import UsersIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import ChartIcon from '@mui/icons-material/ShowChartOutlined';
import MoneyIcon from '@mui/icons-material/MoneyOutlined';
import './Features.sass';

const featuresData = [
  {
    title: 'Budget',
    value: '$24,000',
    icon: BusinessIcon,
    type: 'statistics',
    dynamic: 'decrease',
    conversion: '12',
    iconColor: '#ec4c47',
    accent: false
  },
  {
    title: 'Total users',
    value: '1600',
    icon: UsersIcon,
    type: 'statistics',
    dynamic: 'increase',
    conversion: '16',
    iconColor: '#47b881',
    accent: false
  },
  {
    title: 'Progress',
    value: '75,5%',
    icon: ChartIcon,
    type: 'progress',
    dynamic: null,
    conversion: '75,5',
    iconColor: '#1070CA',
    accent: false
  },
  {
    title: 'Total profit',
    value: '$23,200.00',
    icon: MoneyIcon,
    type: 'statistics',
    dynamic: 'increase',
    conversion: '16',
    iconColor: null,
    accent: true
  }
];

const Features = () => {
  const [data, setData] = useState([]);

  useEffect(() => setData(featuresData), []);

  return (
    <div className="features-wrap">
      { data.map(item => <FeatureBlock key={item.title} item={item} />) }
    </div>
  );
};

export default Features;