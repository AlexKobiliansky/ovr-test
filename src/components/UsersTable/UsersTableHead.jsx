import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';

const UsersTableHead = ({ onSelectAllClick, numSelected, rowCount }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>

        <TableCell>{numSelected > 0 && `Selected ${numSelected} user${numSelected > 1 ? 's' : ''}`}</TableCell>
        <TableCell>User ID</TableCell>
        <TableCell>Phone Number</TableCell>
        <TableCell>Email Address</TableCell>
        <TableCell align="right">Account Created</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default UsersTableHead;