import React from 'react';

import './style.less';

const TextInput = ({ value, placeholder, onChange }) => (
  <input
    type="text"
    className="TextInput"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default TextInput;
