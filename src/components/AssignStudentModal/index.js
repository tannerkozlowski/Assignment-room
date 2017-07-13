import React, { Component } from 'react';
import Modal          from '../Modal';
import StudentCard    from '../StudentCard';
import Button         from '../Button';
import SearchInput    from '../SearchInput';
import RadioGroup     from '../RadioGroup';

import './style.less';

class AssignStudentModal extends Component {
  static initialState = {
    filters: {
      search: ''
    },
    selectedRoom: null
  };

  constructor(props) {
    super(props);
    this.state = { ...AssignStudentModal.initialState, students: props.students };
  }

  changeRoom(value) {
    this.setState({ selectedRoom: value });
  }

  toggleStudent(index) {
    const { students } = this.state;
    const student = students.filter( s => s.id === index)[0];
    if (!student) return;
    const newStudent = { ...student, selected: !student.selected };
    const newStudents = [
      ...students.slice(0, index),
      newStudent,
      ...students.slice(index + 1)
    ];
    this.setState({ students: newStudents });
  }

  changeSearch(e) {
    this.setState({
      filters: { search: e.target.value }
    });
  }

  applyFilters() {
    const term = this.state.filters.search.toLowerCase();

    return this.state.students.filter(student => {
      const name = `${student.firstName} ${student.lastName}`.toLowerCase();

      return name.indexOf(term) === 0;
    });
  }

  save() {
    if (!(this.state.students.filter( s => s.selected).length > 0 && this.state.selectedRoom)) {
      return;
    }
    const students = this.state.students;
    const newStudents = students.map(student => {
      if (student.selected) {
        student.room = this.state.selectedRoom;
      }
      return { ...student, selected: false };
    });
    this.props.onSave(newStudents);
    this.props.onClose();
    this.setState({ students: this.props.students, selectedRoom: null });
  }

  renderStudents() {
    const content = this.applyFilters(this.state.students).map((student, index) =>
      <StudentCard
        key={`student-${index}`}
        student={student}
        onClick={() => this.toggleStudent(student.id)}
      />
    );

    return content;
  }

  render() {
    const { visible, onClose } = this.props;
    const { filters, selectedRoom } = this.state;
    const students = this.renderStudents();
    const selectedLength = this.state.students.filter( s => s.selected).length;
    const buttonLabel = `Assign selected ${selectedLength > 0 ? '('+ selectedLength + ')' : ''} to the ${selectedRoom || 'room'}`;
    const tipLabel = selectedLength ? `${selectedLength} of ${this.state.students.length} selected` : 'Nobody selected';
    return (
      <Modal
        visible={visible}
        onClose={onClose}
      >
        <div className="AssignStudentModal">
          <div className="Modal__header">
            <span className="Modal__header-title">
              Assign Students to room
            </span>
            <div className="Modal__controls">
              <SearchInput value={filters.search} onChange={::this.changeSearch} />

              <div className="FilterBar__dropdown-wrapper">
                <RadioGroup
                  value={this.state.selectedRoom}
                  title="Rooms"
                  checked={this.state.selectedRoom}
                  onToggle={::this.changeRoom}
                >
                  <RadioGroup.Item title="Room 1" value="Room 1" />
                  <RadioGroup.Item title="Room 2" value="Room 2" />
                  <RadioGroup.Item title="Room 3" value="Room 3" />
                  <RadioGroup.Item title="Room 4" value="Room 4" />
                </RadioGroup>
              </div>
            </div>
          </div>

          <div className="Modal__window-container">
            <div className="Modal__window-tip">{tipLabel}</div>
            <div className="AssignStudentModal__list">
              {students}
            </div>
          </div>

          <Button onClick={::this.save} className="Modal__submit" label={buttonLabel} />
        </div>
      </Modal>
    );
  }
}

export default AssignStudentModal;
