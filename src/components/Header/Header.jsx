import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import './Header.sass';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src={logo} alt="logo" className="img-responsive"/>
          <span>System</span>
        </div>
      </div>
      <div className="header-right">
        <Tooltip title="Notifications">
          <NotificationsIcon />
        </Tooltip>

        <Tooltip title="Logout">
          <ExitToAppIcon />
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;