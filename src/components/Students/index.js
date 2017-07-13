import React, { Component } from 'react';

import Header           from './Header';
import FilterBar        from '../FilterBar';
import StudentList      from '../StudentList';
import AddStudentModal  from '../AddStudentModal';
import AssignStudentModal  from '../AssignStudentModal';

import './style.less';

const getColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

class Students extends Component {
  static initialState = {
    students: [],

    filters: {
      search: '',

      rooms: {
        'Room 1': false,
        'Room 2': false,
        'Room 3': false,
        'Room 4': false
      },

      enrollment: {
        enrolled: true
      }
    },

    addStudentModal: {
      isOpen: false
    },

    assignStudentModal: {
      isOpen: false
    },

    allSelected: false
  };

  constructor() {
    super();
    let generatedStudents = Array.from(new Array(20), (_, index) => {
      return {
        id: index,
        firstName: this.generateString(),
        lastName: this.generateString(),
        room: this.generateRoom(),
        parent: this.generateString(),
        bgColor: this.getColor(),
        selected: false
      };
    });
    this.state = { ...Students.initialState, students: generatedStudents };
  }

  generateRoom() {
    const min = 1;
    const max = 4;
    return `Room ${Math.floor(Math.random() * (max - min + 1)) + min}`;
  }

  generateString() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }

  getColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
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

  toggleModal(modal, isOpen) {
    const obj = {};
    obj[modal] = { isOpen: isOpen };
    return () => this.setState(obj);
  }

  applyFilters() {
    const term = this.state.filters.search.toLowerCase();
    const checkedRooms = Object.keys(this.state.filters.rooms).filter(r => this.state.filters.rooms[r]);

    return this.state.students.filter(student => {
      const name = `${student.firstName} ${student.lastName}`.toLowerCase();

      return name.indexOf(term) === 0 && (checkedRooms.length === 0 || checkedRooms.indexOf(student.room) !== -1);
    });
  }

  changeRoom(value) {
    const newStudents = [ ...this.state.students ];

    newStudents.filter(s => s.selected).forEach(s => {
      s.room = value;
    });

    this.setState({ students: newStudents });
  }

  addStudents(students) {
    const newStudents = students.map(student => ({
      ...student,
      bgColor: getColor(),
      selected: false,
      edit: false
    }));

    this.setState({
      students: [ ...this.state.students, ...newStudents]
    });
  }

  replaceStudents(students) {
    this.setState({ students });
  }

  toggleSelect(index) {
    const { students } = this.state;
    const student = students[index];

    const newStudent = { ...student, selected: !student.selected };
    const newStudents = [
      ...students.slice(0, index),
      newStudent,
      ...students.slice(index + 1)
    ];

    this.setState({ students: newStudents });
  }

  toggleSelectAll() {
    const { allSelected } = this.state;

    const newStudents = this.state.students.map(student => ({
      ...student,
      selected: !allSelected
    }));

    this.setState({ students: newStudents, allSelected: !allSelected });
  }

  toggleEditMode(index) {
    const students = [ ...this.state.students ];
    const newStudent = { ...students[index] };

    newStudent.edit = !newStudent.edit;

    const newStudents = [
      ...students.slice(0, index),
      newStudent,
      ...students.slice(index + 1)
    ];

    this.setState({ students: newStudents });
  }

  updateStudent(index, data) {
    const student = this.state.students[index];

    const newStudents = [...this.state.students];
    newStudents[index] = { ...student, ...data, edit: false };

    this.setState({ students: newStudents });
  }

  render() {
    const { filters, addStudentModal, assignStudentModal, students } = this.state;

    return (
      <div className="Students">
        <Header
          onAddClick={::this.toggleModal('addStudentModal', true)}
          onAssignClick={::this.toggleModal('assignStudentModal', true)} />
        <FilterBar
          filters={filters}
          changeSearch={::this.changeSearch}
          toggleFilter={::this.toggleFilter}
          clearFilters={::this.clearFilters}
        />
        <StudentList
          onSelectAll={::this.toggleSelectAll}
          onSelect={::this.toggleSelect}
          onAddClick={::this.toggleModal('addStudentModal', true)}
          onRoomChange={::this.changeRoom}
          onEditModeChange={::this.toggleEditMode}
          updateStudent={::this.updateStudent}
          students={::this.applyFilters()}
        />
        <AddStudentModal
          visible={addStudentModal.isOpen}
          onSave={::this.addStudents}
          onClose={::this.toggleModal('addStudentModal', false)}
        />
        <AssignStudentModal
          students={students}
          visible={assignStudentModal.isOpen}
          onSave={::this.replaceStudents}
          onClose={::this.toggleModal('assignStudentModal', false)}
          filter={this.applyFilters}
        />
      </div>
    );
  }
}

export default Students;
