import React from 'react';
import LastProducts from '../LastProducts/LastProducts';
import LastOrders from '../LastOrders/LastOrders';
import './SalesInfo.sass';


const SalesInfo = () => {
  return (
    <div className="sales-info-wrapper">
      <LastProducts />
      <LastOrders />
    </div>
  );
};

export default SalesInfo;