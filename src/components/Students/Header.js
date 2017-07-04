import React from 'react';

import addIcon from 'assets/icons/add-circle-outline.svg';

const Header = ({ onAddClick }) => (
  <div className="Students__header">
    <div className="Students__header-title">
      Students
    </div>

    <div className="Students__header-add-student" onClick={onAddClick}>
      <img className="Students__header-add-student-icon" src={addIcon} alt="Add student" />
      <span>Add student</span>
    </div>
  </div>
);

export default Header;
