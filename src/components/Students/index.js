import React, { Component } from 'react';

import FilterBar  from '../FilterBar';
import Header     from './Header';
import './style.less';

class Students extends Component {
  static initialState = {
    students: [],

    filters: {
      search: '',

      rooms: {
        one:   false,
        two:   false,
        three: false,
        four:  false
      },

      enrollment: {
        enrolled: false,
        notEnrolled: false
      }
    }
  };

  constructor() {
    super();

    this.state = { ...Students.initialState };
  }

  changeSearch(e) {
    this.setState({
      filters: { ...this.state.filters, search: e.target.value }
    });
  }

  toggleFilter(filterName, value) {
    const { filters } = this.state;
    const oldFilter = filters[filterName];

    const newFilter = { ...oldFilter };
    newFilter[value] = !oldFilter[value];

    const newFilters = { ...filters };
    newFilters[filterName] = newFilter;

    this.setState({ filters: newFilters });
  }

  clearFilters() {
    this.setState({ filters: Students.initialState.filters });
  }

  render() {
    return (
      <div className="Students">
        <Header />
        <FilterBar
          filters={this.state.filters}
          changeSearch={::this.changeSearch}
          toggleFilter={::this.toggleFilter}
          clearFilters={::this.clearFilters}
        />
      </div>
    );
  }
}

export default Students;
