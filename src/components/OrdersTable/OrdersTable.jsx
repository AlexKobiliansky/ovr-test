import React, {useState} from 'react';
import {
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  TableHead,
  IconButton, MenuItem, Menu, Paper
} from '@mui/material';
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

const OrdersTable = ({orders, onChangeStatus}) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [editingOrder, setEditingOrder] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (e, order) => {
    setEditingOrder(order);
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setEditingOrder(null);
    setAnchorEl(null);
  };

  const handleClickMenuItem = (id, status) => {
    onChangeStatus(id, status);
    handleCloseMenu();
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

  return (
    <>
      <TableContainer className="table-container">
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
                      <IconButton
                        onClick={(e) => handleOpenMenu(e, row)}>
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

      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
      >
        {editingOrder?.status !== 'delivered' &&
        <MenuItem
          onClick={() => handleClickMenuItem(editingOrder?.id, 'delivered')}
        >Set status as "Delivered"</MenuItem>}
        {editingOrder?.status !== 'pending' &&
        <MenuItem
          onClick={() => handleClickMenuItem(editingOrder?.id, 'pending')}
        >Set status as "Pending"</MenuItem>}
        {editingOrder?.status !== 'refund' &&
        <MenuItem
          onClick={() => handleClickMenuItem(editingOrder?.id, 'refund')}
        >Set status as "Refund"</MenuItem>}
      </Menu>
    </>
  );
};

export default OrdersTable;