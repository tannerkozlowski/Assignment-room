import React from 'react';

const Item = ({ title, checked, value, onClick }) => (
  <div className="CheckboxGroup__item">
    <input
      id={value}
      type="checkbox"
      className="CheckboxGroup__item-checkbox"
      checked={checked}
      onChange={onClick}
    />
    <label className="CheckboxGroup__item-label" htmlFor={value}>
      {title}
    </label>
  </div>
);

export default Item;
