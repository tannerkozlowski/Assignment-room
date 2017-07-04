import React from 'react';

import './style.less';

const Button = ({ className, label, onClick, fill }) => (
  <button className={`Button ${fill ? 'Button--fill' : ''} ${className || ''}`} onClick={onClick}>
    { label }
  </button>
);

export default Button;
