import React from 'react';
import './PaperFooter.sass';

const PaperFooter = ({children}) => {
  return (
    <div className="paper-footer">
      {children}
    </div>
  );
};

export default PaperFooter;