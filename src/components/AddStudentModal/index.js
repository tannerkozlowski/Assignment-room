import React, { Component } from 'react';

import Row         from './Row';
import Button      from '../Button';
import closeIcon   from 'assets/icons/close.svg';

import './style.less';

const rooms = {
  one:   false,
  two:   false,
  three: false,
  four:  false
};

const capitalize = str => str[0].toUpperCase() + str.slice(1);

class AddStudentModal extends Component {
  static initialState = {
    students: [],

    newStudent: {
      firstName: '',
      lastName: '',
      room: '',
      parent: '',
      isNew: true
    }
  };

  constructor() {
    super();

    this.state = { ...AddStudentModal.initialState };
  }

  addStudent() {
    const { students, newStudent } = this.state;

    if (!newStudent.firstName || !newStudent.lastName || !newStudent.room || !newStudent.parent) {
      return;
    }

    const newStudents = [...students, {
      firstName:  capitalize(newStudent.firstName),
      lastName:   capitalize(newStudent.lastName),
      room:       newStudent.room,
      parent:     capitalize(newStudent.parent)
    }];

    this.setState({
      students: newStudents,
      newStudent: AddStudentModal.initialState.newStudent
    });
  }

  removeStudent(id) {
    const index = id - 1;

    const newStudents = [
      ...this.state.students.slice(0, index),
      ...this.state.students.slice(index + 1)
    ];

    this.setState({ students: newStudents });
  }

  updateStudent(id, data) {
    if (data.isNew) {
      this.setState({ newStudent: { ...this.state.newStudent, ...data } });
      return;
    }

    const index = id - 1;
    const student = this.state.students[index];

    const newStudents = [ ...this.state.students ];
    newStudents[index] = { ...student, ...data };

    this.setState({ students: newStudents });
  }

  save() {
    if (!this.state.students.length) {
      return;
    }
    debugger;
    this.props.onSave(this.state.students);
    this.props.onClose();
    this.setState(AddStudentModal.initialState);
  }

  renderStudents() {
    const studentRows = this.state.students.map((s, index) =>
      <Row
        id={index + 1}
        key={'student-' + index + 1}
        params={s}
        rooms={rooms}
        onUpdate={::this.updateStudent}
        onAdd={::this.addStudent}
        onRemove={::this.removeStudent}
      />
    );

    studentRows.push(
      <Row
        key={'new-student-' + studentRows.length + 1}
        id={studentRows.length + 1}
        params={this.state.newStudent}
        onUpdate={::this.updateStudent}
        rooms={rooms}
        onAdd={::this.addStudent}
      />
    );

    return studentRows;
  }

  render() {
    const { visible, onClose } = this.props;

    return (
      <div className={`AddStudentModal ${visible ? 'AddStudentModal--visible' : ''}`}>
        <div className="AddStudentModal__window">

          <div className="AddStudentModal__header">
            <span className="AddStudentModal__header-title">
              Add Students
            </span>

            <span className="AddStudentModal__header-note">
              Adding more than one member?

              <a href="#" className="AddStudentModal__header-note-link">
                Bulk upload
              </a>
            </span>
          </div>

          <div className="AddStudentModal__window-container">
            <div className="AddStudentModal__list">
              {::this.renderStudents()}
            </div>
          </div>

          <img
            className="AddStudentModal__close"
            src={closeIcon}
            onClick={onClose}
            alt="Close window"
          />

          <Button onClick={::this.save} className="AddStudentModal__submit" label="Save information" />
        </div>
      </div>
    );
  }
}

export default AddStudentModal;
