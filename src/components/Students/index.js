import React, { Component } from 'react';

import Header           from './Header';
import FilterBar        from '../FilterBar';
import StudentList      from '../StudentList';
import AddStudentModal  from '../AddStudentModal';

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
    },

    addStudentModal: {
      isOpen: false
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

  toggleModal(isOpen) {
    return () => this.setState({ addStudentModal: { isOpen: isOpen } });
  }

  render() {
    const { students, filters, addStudentModal } = this.state;

    return (
      <div className="Students">
        <Header onAddClick={::this.toggleModal(true)} />
        <FilterBar
          filters={filters}
          changeSearch={::this.changeSearch}
          toggleFilter={::this.toggleFilter}
          clearFilters={::this.clearFilters}
        />
        <StudentList
          onAddClick={::this.toggleModal(true)}
          students={students}
        />
        <AddStudentModal
          visible={addStudentModal.isOpen}
          onClose={::this.toggleModal(false)}
        />
      </div>
    );
  }
}

export default Students;
