import React from 'react';

const Item = ({ title, checked, value, onClick }) => (
  <div className="RadioGroup__item">
    <input
      readOnly
      type="radio"
      className="RadioGroup__item-checkbox"
      checked={checked}
    />
    <label className="RadioGroup__item-label" onClick={onClick}>
      {title}
    </label>
  </div>
);

export default Item;
