import React from 'react';

import Button from '../Button';
import studentIcon from 'assets/icons/student.svg';

const EmptyList = ({ onAddClick }) => (
  <div className="StudentList__empty-list">
    <div className="StudentList__empty-list-header">
      <img
        className="StudentList__empty-list-header-icon"
        src={studentIcon}
        alt="No students"
      />

      <div className="StudentList__empty-list-header-title">
        No students found
      </div>
    </div>

    <div className="StudentList__empty-list-description">
      Add a new student or change filter conditions.
    </div>

    <Button className="StudentList__empty-list-add" label="Add students" onClick={onAddClick} />
  </div>
);

export default EmptyList;
