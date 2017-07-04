import React from 'react';

import './style.less';

const Checkbox =  ({ checked, onClick }) => (
  <div className={`Checkbox ${checked ? 'Checkbox--checked' : ''}`} onClick={onClick}>
    <div className="Checkbox__mark" />
  </div>
);

export default Checkbox;
