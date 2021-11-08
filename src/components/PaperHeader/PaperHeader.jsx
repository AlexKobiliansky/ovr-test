import React from 'react';
import './PaperHeader.sass';

const PaperHeader = ({title, subtitle, children}) => {
  return (
    <div className="paper-header">
      <div className="paper-header-static">
        <span className="paper-header-title">{title}</span>
        <span className="paper-header-subtitle">{subtitle}</span>
      </div>
      <div className="paper-header-dynamic">
        {children}
      </div>
    </div>
  );
};

export default PaperHeader;