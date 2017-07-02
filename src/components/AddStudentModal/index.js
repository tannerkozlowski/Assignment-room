import React, { Component } from 'react';

import Row         from './Row';
import Button      from '../Button';
import closeIcon   from 'assets/icons/close.svg';

import './style.less';

class AddStudentModal extends Component {
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
              <Row id="1" />
            </div>
          </div>

          <img
            className="AddStudentModal__close"
            src={closeIcon}
            onClick={onClose}
            alt="Close window"
          />

          <Button className="AddStudentModal__submit" label="Save information" />
        </div>
      </div>
    );
  }
}

export default AddStudentModal;
