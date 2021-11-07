import React from 'react';
import './UserInfoRow.sass';

const UserInfoRow = ({icon, title, info}) => {
  const InfoIcon = icon;
  return (
    <div className="user-info">
      <div className="user-info-title">
        <InfoIcon />
        <span>{title}:</span>
      </div>
      <div className="user-info-desc">
        {info}
      </div>
    </div>
  );
};

export default UserInfoRow;