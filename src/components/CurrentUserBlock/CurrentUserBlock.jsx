import React from 'react';
import './CurrentUserBlock.sass';
import avatar from '../../assets/current-user-image.png';

const CurrentUserBlock = () => {
  return (
    <div className="currentUser">
      <div className="currentUser-img">
        <img src={avatar} alt="Roman Kutepov"/>
      </div>
      <div className="currentUser-name">
        Roman Kutepov
      </div>
      <div className="currentUser-post">
        Brain Director
      </div>
    </div>
  );
};

export default CurrentUserBlock;