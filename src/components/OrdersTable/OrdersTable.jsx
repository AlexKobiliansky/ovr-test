import React, {useState} from 'react';
import { Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  TableHead,
  IconButton } from '@mui/material';
import {makeStyles} from '@mui/styles';
import dateFormat from "dateformat";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CreateIcon from '@mui/icons-material/Create';
import './OrdersTable.sass';

const useStyles = makeStyles({
  tableCell: {
    paddingTop: 8,
    paddingBottom: 8
  }
})

const OrdersTable = ({orders}) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;
  
  return (
    <Box sx={{width: '100%'}}>
      <TableContainer>
        <Table
          sx={{minWidth: 750}}
          size={'small'}
        >
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.name}
                    sx={{ paddingTop: 8 }}
                  >
                    <TableCell className={classes.tableCell}>{row.id}</TableCell>
                    <TableCell className={classes.tableCell}>{row.name}</TableCell>
                    <TableCell className={classes.tableCell}>
                      <span style={{color: '#9EA0A5'}}>{dateFormat(row.date, 'mm/dd/yyyy')}</span>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <div className="order-status">
                        <span className={`order-status-badge ${row.status}`} />
                        {row.status[0].toUpperCase() + row.status.slice(1)}
                      </div>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <IconButton onClick={() => {}}>
                        <MoreVertIcon sx={{color: '#9EA0A5'}} />
                      </IconButton>

                      <IconButton>
                        <CreateIcon sx={{color: '#9EA0A5'}} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6}/>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 12, 18, 25, 30]}
        component="div"
        count={orders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default OrdersTable;