import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {MenuItem, Paper} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {nFormatter} from '../utils/nFormatter';
import PaperHeader from '../components/PaperHeader/PaperHeader';
import PaperFooter from '../components/PaperFooter/PaperFooter';
import {CustomSelect} from '../components/ui/CustomSelect/CutomSelect';
import './CustomBarChart.sass';



const data = {
  week: [
    {
      name: '4 Nov',
      option1: 4000,
      option2: 2400,
    },
    {
      name: '4 Nov',
      option1: 3000,
      option2: 1398,
    },
    {
      name: '5 Nov',
      option1: 2000,
      option2: 9800,
    },
    {
      name: '6 Nov',
      option1: 2780,
      option2: 3908,
    },
    {
      name: '7 Nov',
      option1: 1890,
      option2: 4800,
    },
    {
      name: '8 Nov',
      option1: 2390,
      option2: 3800,
    },
    {
      name: '9 Nov',
      option1: 3490,
      option2: 4300,
    },
  ],
  month: [
    {
      name: '10 Okt',
      option1: 4000,
      option2: 2400,
    },
    {
      name: '11 Okt',
      option1: 5000,
      option2: 3400,
    },
    {
      name: '12 Okt',
      option1: 6600,
      option2: 4400,
    },
    {
      name: '13 Okt',
      option1: 4000,
      option2: 2100,
    },
    {
      name: '14 Okt',
      option1: 14000,
      option2: 7800,
    },
    {
      name: '15 Okt',
      option1: 10000,
      option2: 9000,
    },
    {
      name: '16 Okt',
      option1: 5700,
      option2: 2400,
    },
    {
      name: '17 Okt',
      option1: 6600,
      option2: 5500,
    },
    {
      name: '18 Okt',
      option1: 4000,
      option2: 2400,
    },
    {
      name: '19 Okt',
      option1: 9500,
      option2: 7600,
    },
    {
      name: '20 Okt',
      option1: 4000,
      option2: 2400,
    },
    {
      name: '21 Okt',
      option1: 5000,
      option2: 3400,
    },
    {
      name: '22 Okt',
      option1: 6600,
      option2: 4400,
    },
    {
      name: '23 Okt',
      option1: 4000,
      option2: 2100,
    },
    {
      name: '24 Okt',
      option1: 14000,
      option2: 7800,
    },
    {
      name: '25 Okt',
      option1: 10000,
      option2: 9000,
    },
    {
      name: '26 Okt',
      option1: 5700,
      option2: 2400,
    },
    {
      name: '27 Okt',
      option1: 6600,
      option2: 5500,
    },
    {
      name: '28 Okt',
      option1: 4000,
      option2: 2400,
    },
    {
      name: '29 Okt',
      option1: 9500,
      option2: 7600,
    },
    {
      name: '30 Nov',
      option1: 4000,
      option2: 2400,
    },
    {
      name: '4 Nov',
      option1: 3000,
      option2: 1398,
    },
    {
      name: '5 Nov',
      option1: 2000,
      option2: 9800,
    },
    {
      name: '6 Nov',
      option1: 2780,
      option2: 3908,
    },
    {
      name: '7 Nov',
      option1: 1890,
      option2: 4800,
    },
    {
      name: '8 Nov',
      option1: 2390,
      option2: 3800,
    },
    {
      name: '9 Nov',
      option1: 3490,
      option2: 4300,
    }
  ],
  year: [
    {
      name: 'Dec 2020',
      option1: 144000,
      option2: 98000,
    },
    {
      name: 'Jan 2021',
      option1: 154000,
      option2: 89000,
    },
    {
      name: 'Feb 2021',
      option1: 102000,
      option2: 88000,
    },
    {
      name: 'Mar 2021',
      option1: 104000,
      option2: 89000,
    },
    {
      name: 'Apr 2021',
      option1: 99000,
      option2: 60000,
    },
    {
      name: 'May 2021',
      option1: 80000,
      option2: 55000,
    },
    {
      name: 'Jun 2021',
      option1: 104000,
      option2: 80000,
    },
    {
      name: 'Jul 2021',
      option1: 100000,
      option2: 98000,
    },
    {
      name: 'Aug 2021',
      option1: 106000,
      option2: 104000,
    },
    {
      name: 'Set 2021',
      option1: 120000,
      option2: 106000,
    },
    {
      name: 'Okt 2021',
      option1: 144000,
      option2: 98000,
    },
    {
      name: 'Nov 2021',
      option1: 20000,
      option2: 16000,
    },
  ]
}

const CustomBarChart = () => {
  const [chartData, setChartData] = useState(data['week']);
  const [selectValue, setSelectValue] = useState('week')

  const handleDataChange = e => {
    setSelectValue(e.target.value);
    setChartData(data[e.target.value]);
  }

  return (
    <Paper>
      <PaperHeader
        title="Users by device"
      >
        <CustomSelect value={selectValue} onChange={handleDataChange} >
          <MenuItem value={'week'}>Last 7 days</MenuItem>
          <MenuItem value={'month'}>Last month</MenuItem>
          <MenuItem value={'year'}>Last year</MenuItem>
        </CustomSelect>
      </PaperHeader>
      <div className="barchart-wrapper">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart
            width={500}
            height={429}
            data={chartData}
            margin={{
              top: 5,
              right: 20,
              left: 10,
              bottom: 15,
            }}
            barGap={7}
          >
            <CartesianGrid
              strokeDasharray="6 4"
              vertical={false}
              stroke={'#E4E7EB'}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{fill: '#A6B1BB', fontSize: 14}}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={tick => nFormatter(tick)}
              tick={{ fill: '#637381', fontSize: 13, opacity: 0.85 }}
              tickMargin={10}
            />
            <Tooltip
              itemStyle={{color: '#000'}}
              labelStyle={{marginBottom: 10}}
            />
            <Bar
              dataKey="option1"
              fill="#1665D8"
              barSize={14}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="option2"
              fill="#EDF0F2"
              barSize={14}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <PaperFooter>
        <Link to={'#'} className="accent-link">Audience Overview</Link>
      </PaperFooter>
    </Paper>
  );
};

export default CustomBarChart;