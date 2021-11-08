import React, {useState} from 'react';
import {MenuItem, Paper} from '@mui/material';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import {Link} from 'react-router-dom';
import PaperHeader from '../PaperHeader/PaperHeader';
import PaperFooter from '../PaperFooter/PaperFooter';
import StatItem from '../StatItem/StatItem';
import {CustomSelect} from '../ui/CustomSelect/CutomSelect';
import CachedIcon from '@mui/icons-material/Cached';
import desktopIcon from '../../assets/icons/desktop.svg';
import tabletIcon from '../../assets/icons/tablet.svg';
import mobileIcon from '../../assets/icons/mobile.svg';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './CustomPieChart.sass';

const COLORS = ['#1070CA', '#EC4C47', '#F7D154'];

const data = {
  week: [
    { name: 'Desktop', value: 63 },
    { name: 'Tablet', value: 15 },
    { name: 'Mobile', value: 22 }
  ],
  month: [
    { name: 'Desktop', value: 55 },
    { name: 'Tablet', value: 17 },
    { name: 'Mobile', value: 28 }
  ],
  year: [
    { name: 'Desktop', value: 50 },
    { name: 'Tablet', value: 11 },
    { name: 'Mobile', value: 39 }
  ]
}

const statsItems = [
  {
    icon: desktopIcon,
    title: 'Desktop'
  },
  {
    icon: tabletIcon,
    title: 'Tablet'
  },
  {
    icon: mobileIcon,
    title: 'Mobile'
  }
]

const CustomPieChart = () => {
  const [chartData, setChartData] = useState(data['week']);
  const [selectValue, setSelectValue] = useState('week');

  const handleDataChange = e => {
    setSelectValue(e.target.value);
    setChartData(data[e.target.value]);
  }

  return (
    <Paper>
      <PaperHeader
        title="Users by device"
        style={{padding: '16px 24px'}}
        withBorder
      >
        <CachedIcon />
      </PaperHeader>
      <div className="piechart-wrapper">
        <div className="piechart-container">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width="100%" height="100%">
              <Pie
                data={chartData}
                innerRadius={100}
                outerRadius={122}
                startAngle={90}
                endAngle={450}
                fill="#8884d8"
                dataKey="value"
                animationDuration={1000}
                animationBegin={0}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => value+'%'}/>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="piechart-stats">
          {statsItems.map((item, index) => (
            <StatItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              value={chartData[index].value}
              color={COLORS[index]}
            />
          ))}
        </div>
      </div>
      <PaperFooter flex>
        <CustomSelect value={selectValue} onChange={handleDataChange} IconComponent={ArrowRightIcon}>
          <MenuItem value={'week'}>Last 7 days</MenuItem>
          <MenuItem value={'month'}>Last month</MenuItem>
          <MenuItem value={'year'}>Last year</MenuItem>
        </CustomSelect>
        <Link to={'#'} className="accent-link">Audience Devices</Link>
      </PaperFooter>
    </Paper>
  );
};

export default CustomPieChart;