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
        Get started by adding students
      </div>
    </div>

    <div className="StudentList__empty-list-description">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
    </div>

    <Button label="Add a student" onClick={onAddClick} />
  </div>
);

export default EmptyList;
