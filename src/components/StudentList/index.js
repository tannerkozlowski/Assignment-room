import React, { Component } from 'react';

import EmptyList from './EmptyList';
import './style.less';

class StudentList extends Component {
  render() {
    const { students, onAddClick } = this.props;
    const content = students.length ? <div /> : <EmptyList onAddClick={onAddClick} />;

    return (
      <div className="StudentList">
        {content}
      </div>
    );
  }
}

export default StudentList;
