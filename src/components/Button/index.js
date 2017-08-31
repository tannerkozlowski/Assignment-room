import React from 'react';

import './style.less';

const Button = ({ className, label, onClick, fill, disabled }) => (
  <button className={`Button ${fill ? 'Button--fill' : ''} ${className || ''}`} onClick={onClick} disabled={disabled}>
    { label }
  </button>
);

export default Button;
