import React from 'react';

import SearchInput from '../SearchInput';
import CheckboxGroup from '../CheckboxGroup';
import './style.less';

const FilterBar = ({ filters, changeSearch, toggleFilter, clearFilters, rooms }) => (
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
            {rooms.map((room) => (
              <CheckboxGroup.Item key={room} title={room} value={room} />
            ))}
          </CheckboxGroup>
        </div>

        <div className="FilterBar__dropdown-wrapper">
          <CheckboxGroup
            title="Enrolled"
            filterName="enrollment"
            checked={filters.enrollment}
          >
            <CheckboxGroup.Item title="Enrolled" value="enrolled" />
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
