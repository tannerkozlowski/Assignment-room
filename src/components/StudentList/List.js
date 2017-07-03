import React, { Component } from 'react';

import RadioGroup    from '../RadioGroup';
import Checkbox      from '../Checkbox';
import DisplayRow    from './DisplayRow';
import EditRow       from './EditRow';


class List extends Component {
  constructor() {
    super();

    this.state = {
      selectAll: false,
      selectedRoom: ''
    };
  }

  toggleSelectAll() {
    this.setState({ selectAll: !this.state.selectAll });
    this.props.onSelectAll();
  }

  changeRoom(value) {
    this.setState({ selectedRoom: value });
    this.props.onRoomChange(value);

    setTimeout(() => this.setState({ selectedRoom: '' }), 400);
  }

  generateTableRows() {
    const { students, onSelect, onEditModeChange, onUpdate } = this.props;

    return students.map((student, index) => (
      !student.edit ?
        <DisplayRow
          key={'student-' + index}
          id={index}
          student={student}
          onSelect={onSelect}
          onEditModeChange={onEditModeChange}
        /> :
        <EditRow
          key={'student-' + index}
          id={index}
          student={student}
          onSelect={onSelect}
          onEditModeChange={onEditModeChange}
          onUpdate={onUpdate}
        />
    ));
  }

  render() {
    const { students } = this.props;

    return (
      <div className="StudentList__list">
        <div className="StudentList__list-length">
          Showing
          <span className="StudentList__list-length-value">
            {students.length}
          </span>
          entries
        </div>

        <div className="StudentList__list-actions">
          <Checkbox checked={this.state.selectAll} onClick={::this.toggleSelectAll} />

          <div className="StudentList__list-actions-rooms">
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

        <div className="StudentList__list-table">
          <table>
            <thead className="StudentList__list-table-head">
              <tr>
                <th className="StudentList__list-table-head-checkbox" />

                <th className="StudentList__list-table-head-name">
                  Student
                </th>

                <th className="StudentList__list-table-head-status">
                  Status
                </th>

                <th className="StudentList__list-table-head-room">
                  Room
                </th>

                <th className="StudentList__list-table-head-edit" />
              </tr>
            </thead>

            <tbody>
              {::this.generateTableRows()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default List;
