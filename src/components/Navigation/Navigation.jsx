import React from 'react';
import './Navigation.sass';
import NavItem from '../NavItem/NavItem';

const Navigation = ({title, routes}) => {
  return (
    <div className="navigation">
      {title && <div className="navigation-title">{title}</div>}
      <nav>
        <ul>
          {routes?.map(route => <NavItem key={route.title} route={route} />)}
        </ul>
      </nav>

    </div>
  );
};

export default Navigation;