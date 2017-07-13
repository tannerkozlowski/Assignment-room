import React from 'react';

import searchIcon from 'assets/icons/search.svg';
import './style.less';

const SearchInput = ({ value, className, onChange }) => (
  <div className={`SearchInput ${className || ''}`}>
    <img
      className="SearchInput__search-icon"
      src={searchIcon}
      alt="Search"
    />

    <input
      className="SearchInput__field"
      type="text"
      placeholder="Search for students"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchInput;
