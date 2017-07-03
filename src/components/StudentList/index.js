import React, { Component } from 'react';

import EmptyList  from './EmptyList';
import List       from './List';
import './style.less';

class StudentList extends Component {
  render() {
    const {
      students,
      onAddClick,
      onSelect,
      onSelectAll,
      onRoomChange,
      onEditModeChange,
      updateStudent
    } = this.props;
    const content = students.length
      ? <List
          students={students}
          onSelect={onSelect}
          onSelectAll={onSelectAll}
          onRoomChange={onRoomChange}
          onEditModeChange={onEditModeChange}
          onUpdate={updateStudent}
        />
      : <EmptyList onAddClick={onAddClick} />;

    return (
      <div className="StudentList">
        {content}
      </div>
    );
  }
}

export default StudentList;
