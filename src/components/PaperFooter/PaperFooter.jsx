import React from 'react';
import './PaperFooter.sass';

const PaperFooter = ({children, flex}) => {
  return (
    <div className={`paper-footer ${flex ? 'flex' : ''}`}>
      {children}
    </div>
  );
};

export default PaperFooter;