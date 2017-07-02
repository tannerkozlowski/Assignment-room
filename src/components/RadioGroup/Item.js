import React from 'react';

const Item = ({ title, checked, value, onClick }) => (
  <div className="RadioGroup__item">
    <input
      type="radio"
      className="RadioGroup__item-checkbox"
      checked={checked}
    />
    <label className="RadioGroup__item-label" htmlFor={value} onClick={onClick}>
      {title}
    </label>
  </div>
);

export default Item;
