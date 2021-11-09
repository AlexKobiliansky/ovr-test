import React from 'react';
import {Link} from 'react-router-dom';
import {format} from 'timeago.js';
import {IconButton, MenuItem} from '@mui/material';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './LastProductItem.sass';

const LastProductItem = ({product : {id, title, logo, updatedAt}}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="last-product">
      <img src={logo} alt={title} className="img-responsive"/>
      <div className="last-product-info">
        <Link to={`/product/${id}`} className="last-product-title">{title}</Link>
        <div className="last-product-updated">{format(updatedAt)}</div>
      </div>
      <IconButton
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{color: '#9EA0A5'}} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Menu Option #1</MenuItem>
        <MenuItem onClick={handleClose}>Menu Option #2</MenuItem>
        <MenuItem onClick={handleClose}>Menu Option #3</MenuItem>
      </Menu>
    </div>
  );
};

export default LastProductItem;