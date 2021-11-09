import React, {useEffect, useState} from 'react';
import {MenuItem, Paper, Button} from '@mui/material';
import {makeStyles} from '@mui/styles';
import OrdersTable from '../OrdersTable/OrdersTable';
import PaperHeader from '../PaperHeader/PaperHeader';
import {CustomSelect} from '../ui/CustomSelect/CutomSelect';
import './LastOrders.sass';

const useStyles = makeStyles({
  button: {
    marginLeft: 24,
    padding: '5px 20px'
  }
});

const orders = [
  {
    "id": "6189aced40a1f8e90c6aab6f",
    "name": "Reynolds Larsen",
    "date": "2021-08-28T04:19:04",
    "status": "delivered"
  },
  {
    "id": "6189aced7badbfb4ffcc8d7b",
    "name": "Aileen Waller",
    "date": "2021-10-11T12:05:01",
    "status": "delivered"
  },
  {
    "id": "6189aced97afd9a5fa851d9b",
    "name": "Stokes Weiss",
    "date": "2021-05-19T04:05:46",
    "status": "pending"
  },
  {
    "id": "6189aced63ba27ce779458f6",
    "name": "Elsie Contreras",
    "date": "2021-04-12T11:44:10",
    "status": "refund"
  },
  {
    "id": "6189aced12e08dd00f48c0b1",
    "name": "Rich Lang",
    "date": "2021-04-12T07:18:40",
    "status": "delivered"
  },
  {
    "id": "6189aced52f8fdbb26b1fb0a",
    "name": "Loraine Riggs",
    "date": "2021-07-26T04:14:19",
    "status": "pending"
  },
  {
    "id": "6189aced114fea0a1c421379",
    "name": "Lenora Turner",
    "date": "2021-05-03T08:45:51",
    "status": "delivered"
  },
  {
    "id": "6189acede42474bade6cacda",
    "name": "Lewis Wiggins",
    "date": "2021-03-03T08:38:14",
    "status": "pending"
  },
  {
    "id": "6189acede39bac2846a4c301",
    "name": "Silva Goodwin",
    "date": "2021-09-17T09:07:41",
    "status": "delivered"
  },
  {
    "id": "6189aced05999d81164beb74",
    "name": "Francisca Blake",
    "date": "2021-05-25T09:31:49",
    "status": "pending"
  },
  {
    "id": "6189acedad356d5d0fe58f26",
    "name": "Tasha Baker",
    "date": "2021-07-03T03:57:56",
    "status": "delivered"
  },
  {
    "id": "6189aced99e692f90c6b7530",
    "name": "Castaneda Herrera",
    "date": "2021-10-16T08:17:03",
    "status": "pending"
  },
  {
    "id": "6189acedfebdf0cfe3efa356",
    "name": "Valdez Brewer",
    "date": "2021-04-18T03:35:13",
    "status": "delivered"
  },
  {
    "id": "6189aced8fa9fc7a95ffdb77",
    "name": "Tate Gay",
    "date": "2021-10-30T11:02:40",
    "status": "refund"
  },
  {
    "id": "6189aced348bcfda5b6f9fec",
    "name": "Veronica Alexander",
    "date": "2021-04-29T12:28:05",
    "status": "delivered"
  },
  {
    "id": "6189aced690c14e2731058c2",
    "name": "Hurst Lopez",
    "date": "2021-06-27T06:19:32",
    "status": "refund"
  },
  {
    "id": "6189acedab5bd8b5267ea621",
    "name": "Elvira Berger",
    "date": "2021-06-30T05:26:03",
    "status": "delivered"
  },
  {
    "id": "6189acedcba6d2bf8b75bd91",
    "name": "Robbie Good",
    "date": "2021-10-16T10:22:38",
    "status": "refund"
  },
  {
    "id": "6189acede4f75c8795fe878b",
    "name": "Rasmussen Caldwell",
    "date": "2021-08-06T04:36:32",
    "status": "pending"
  },
  {
    "id": "6189aced1bc14d54399546db",
    "name": "Amparo Farley",
    "date": "2021-08-12T02:35:30",
    "status": "refund"
  },
  {
    "id": "6189acedcf10d81ce47f0ba6",
    "name": "Church Montoya",
    "date": "2021-02-15T02:02:52",
    "status": "delivered"
  },
  {
    "id": "6189aced9a8062387f6e585a",
    "name": "Lillie Stokes",
    "date": "2021-07-12T12:25:19",
    "status": "refund"
  },
  {
    "id": "6189aceddce51c2197c8da50",
    "name": "Wolf Hahn",
    "date": "2021-09-19T04:45:48",
    "status": "delivered"
  },
  {
    "id": "6189aced0fc53ea080cdcbe7",
    "name": "Kate Weeks",
    "date": "2021-06-20T03:59:09",
    "status": "delivered"
  },
  {
    "id": "6189acedf2e7351ba330370d",
    "name": "Lane Gray",
    "date": "2021-09-16T04:55:59",
    "status": "refund"
  },
  {
    "id": "6189aced8edd58eb1a5db37c",
    "name": "Jamie Lewis",
    "date": "2021-03-24T06:57:50",
    "status": "delivered"
  },
  {
    "id": "6189aceda278286a7048a9ff",
    "name": "Swanson Arnold",
    "date": "2021-01-23T10:20:36",
    "status": "pending"
  },
  {
    "id": "6189aced2706ddb7305a88c0",
    "name": "Connie Delacruz",
    "date": "2021-04-05T09:02:03",
    "status": "pending"
  },
  {
    "id": "6189acedb58d280ac1b2fb45",
    "name": "Calhoun Holland",
    "date": "2021-05-12T07:27:33",
    "status": "refund"
  },
  {
    "id": "6189acedb18003f35de548fe",
    "name": "Tara Hanson",
    "date": "2021-09-03T02:48:43",
    "status": "pending"
  }
];

const LastOrders = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
      setData(orders.sort((a,b) => a.date < b.date ? 1 : -1))
  }, []);

  const handleChangeStatus = (id, status) => {
    const newData = [...data];
    const index = newData.findIndex(order => order.id === id);
    const editingOrder = newData.find(order => order.id === id);
    editingOrder.status = status;
    newData.splice(index, 1, editingOrder);
    setData(newData);
  }

  const handleSort = e => {
    const sortOrderValue = e.target.value;
    const cloneOrders = [...orders];

    cloneOrders.sort((a ,b) => {
      if (sortOrderValue === 'newest') {
        return a.date < b.date ? 1 : -1
      } else {
        return a.date > b.date ? 1 : -1
      }
    });

    setData(cloneOrders);
    setSortOrder(sortOrderValue);
  }

  return (
    <Paper>
      <PaperHeader
        title='Latest Orders'
        subtitle={`${orders.length} total`}
      >
        <span style={{fontWeight: 500}}>Sort by: </span>
        <CustomSelect value={sortOrder} onChange={handleSort} >
          <MenuItem value={'newest'}>Newest</MenuItem>
          <MenuItem value={'oldest'}>Oldest</MenuItem>
        </CustomSelect>
        <Button variant="outlined" className={classes.button}>New Entry</Button>
      </PaperHeader>
      <OrdersTable orders={data} onChangeStatus={handleChangeStatus} />
    </Paper>
  );
};

export default LastOrders;