import React from 'react';

import searchIcon from 'assets/icons/search.svg';
import './style.less';

const Input = ({ value, onChange }) => (
  <div className="Input">
    <img
      className="Input__search-icon"
      src={searchIcon}
      alt="Search"
    />

    <input
      className="Input__field"
      type="text"
      placeholder="Search students"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
