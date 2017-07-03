import React from 'react';

import Checkbox from '../Checkbox';
import settingsIcon from 'assets/icons/settings.svg';

const getName = (student) => {
  const firstName = student.firstName.substr(0, 1).toUpperCase() + student.firstName.substr(1);
  const lastName  = student.lastName.substr(0, 1).toUpperCase() + student.lastName.substr(1);

  return firstName + ' ' + lastName;
};

const getInitials = (student) => {
  const first = student.firstName.substr(0, 1).toUpperCase();
  const last = student.lastName.substr(0, 1).toUpperCase();
  return `${first}${last}`;
};


const DisplayRow = ({ id, student, onSelect, onEditModeChange }) => (
  <tr className="StudentList__list-table-row">
    <td className="StudentList__list-table-row-checkbox">
      <Checkbox checked={student.selected} onClick={() => onSelect(id)} />
    </td>

    <td className="StudentList__list-table-row-name">
      <div className="StudentList__list-table-row-info">
        <div className="StudentList__list-table-row-avatar" style={{ backgroundColor: student.bgColor }}>
          <div className="StudentList__list-student-initials">
            {getInitials(student)}
          </div>
        </div>
        <div>{getName(student)}</div>
      </div>
    </td>

    <td className="StudentList__list-table-row-status">
      Enrolled
    </td>

    <td className="StudentList__list-table-room">
      {student.room}
    </td>

    <td className="StudentList__list-table-row-edit" onClick={() => onEditModeChange(id)}>
      <img src={settingsIcon} />
    </td>
  </tr>
);

export default DisplayRow;
