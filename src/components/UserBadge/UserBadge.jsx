import React from 'react';
import {getUserInitials} from '../../utils/getUserInitials';
import './UserBadge.sass';

const UserBadge = ({name}) => {
  return (
    <div className="badge">
      <div className="badge-initials">
        {getUserInitials(name)}
      </div>
      <div className="badge-name">{name}</div>
    </div>
  );
};

export default UserBadge;