import React, { Component } from 'react';
import Checkbox from '../Checkbox';
import './style.less';

const getInitials = (student) => {
  const first = student.firstName.substr(0, 1).toUpperCase();
  const last = student.lastName.substr(0, 1).toUpperCase();
  return `${first}${last}`;
};

const getName = (student) => {
  const firstName = student.firstName.substr(0, 1).toUpperCase() + student.firstName.substr(1);
  const lastName  = student.lastName.substr(0, 1).toUpperCase() + student.lastName.substr(1);

  return firstName + ' ' + lastName;
};

class StudentCard extends Component {
  render() {

    const { student, onClick } = this.props;
    return (
      <div className="StudentCard" onClick={onClick}>
        <Checkbox checked={student.selected} />
        <div className="StudentCard__initials" style={{ backgroundColor: student.bgColor }}>
          {getInitials(student)}
        </div>
        <div className="StudentCard__info">
          <div className="StudentCard__full-name">{getName(student)}</div>
          <span className="StudentCard__room">{student.room}</span>
        </div>
        <span className="StudentCard__checkbox">{student.selected}</span>
      </div>
    );
  }
}

export default StudentCard;
