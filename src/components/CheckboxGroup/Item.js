import React from 'react';

const Item = ({ title, checked, value, onClick }) => (
  <div className="CheckboxGroup__item" onClick={onClick}>
    <input
      readOnly
      type="checkbox"
      className="CheckboxGroup__item-checkbox"
      checked={checked}
    />
    <label className="CheckboxGroup__item-label">
      {title}
    </label>
  </div>
);

export default Item;
