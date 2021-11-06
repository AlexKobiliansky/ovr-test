import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavItem.sass';

const NavItem = ({route}) => {
  const { icon: NavItemIcon } = route
  return (
    <li>
      <NavLink
        className="nav-item"
        to={route.path}
        exact="true"
        activeclassname="active"
      >
        <NavItemIcon />
        <span>{route.title}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;