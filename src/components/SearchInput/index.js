import React from 'react';

import searchIcon from 'assets/icons/search.svg';
import './style.less';

const SearchInput = ({ value, onChange }) => (
  <div className="SearchInput">
    <img
      className="SearchInput__search-icon"
      src={searchIcon}
      alt="Search"
    />

    <input
      className="SearchInput__field"
      type="text"
      placeholder="Search students"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchInput;
