import React from 'react';
import Features from '../components/Features/Features';
import Charts from '../components/Charts/Charts';
import SalesInfo from '../components/SalesInfo/SalesInfo';

const DashboardPage = () => {
  return (
    <>
      <Features />
      <Charts />
      <SalesInfo />
    </>
  );
};

export default DashboardPage;