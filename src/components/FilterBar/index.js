import React from 'react';

import SearchInput from '../SearchInput';
import CheckboxGroup from '../CheckboxGroup';
import './style.less';

const FilterBar = ({ filters, changeSearch, toggleFilter, clearFilters }) => (
  <div className="FilterBar">
    <div className="FilterBar__filters-label">Filters</div>

    <div className="FilterBar__container">
      <div className="FilterBar__form">
        <div className="FilterBar__search-field-wrapper">
          <SearchInput value={filters.search} onChange={changeSearch} />
        </div>

        <div className="FilterBar__dropdown-wrapper">
          <CheckboxGroup
            title="Rooms"
            filterName="rooms"
            checked={filters.rooms}
            onToggle={toggleFilter}
          >
            <CheckboxGroup.Item title="Room 1" value="one" />
            <CheckboxGroup.Item title="Room 2" value="two" />
            <CheckboxGroup.Item title="Room 3" value="three" />
            <CheckboxGroup.Item title="Room 4" value="four" />
          </CheckboxGroup>
        </div>

        <div className="FilterBar__dropdown-wrapper">
          <CheckboxGroup
            title="Enrolled"
            filterName="enrollment"
            checked={filters.enrollment}
            onToggle={toggleFilter}
          >
            <CheckboxGroup.Item title="Enrolled" value="enrolled" />
            <CheckboxGroup.Item title="Not enrolled" value="notEnrolled" />
          </CheckboxGroup>
        </div>
      </div>

      <div className="FilterBar__clear-label-wrapper">
        <div className="FilterBar__clear-label" onClick={clearFilters}>
          Clear filters
        </div>
      </div>
    </div>
  </div>
);

export default FilterBar;
