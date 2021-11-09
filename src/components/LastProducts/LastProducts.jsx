import React from 'react';
import {Link} from 'react-router-dom';
import {Paper} from '@mui/material';
import PaperHeader from '../PaperHeader/PaperHeader';
import LastProductItem from '../LastProductItem/LastProductItem';
import PaperFooter from '../PaperFooter/PaperFooter';
import logo1 from '../../assets/product-logo-1.png';
import logo2 from '../../assets/product-logo-2.png';
import logo3 from '../../assets/product-logo-3.png';
import logo4 from '../../assets/product-logo-4.png';
import './LastProducts.sass';


const products = [
  {
    id: 1,
    title: 'DropBox',
    logo: logo1,
    updatedAt: '2021-01-07T13:51:50'
  },
  {
    id: 2,
    title: 'Medium Corporation',
    logo: logo2,
    updatedAt: '2021-01-07T13:51:50'
  },
  {
    id: 3,
    title: 'GitHub',
    logo: logo3,
    updatedAt: '2021-01-07T13:51:50'
  },
  {
    id: 4,
    title: 'Slac',
    logo: logo4,
    updatedAt: '2021-01-07T13:51:50'
  }
]

const LastProducts = () => {
  return (
    <Paper>
      <PaperHeader
        title='Latest Products'
        subtitle='in 5 total'
      />
      <div className="last-products">
        {products.map(product => <LastProductItem key={product.id} product={product} />)}
      </div>
      <PaperFooter>
        <Link to={'#'} className="accent-link">View all</Link>
      </PaperFooter>
    </Paper>
  );
};

export default LastProducts;