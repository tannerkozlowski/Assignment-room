import React, { Component } from 'react';
import closeIcon   from 'assets/icons/close.svg';
import './style.less';

class Modal extends Component {
  render() {
    const { visible, onClose, children } = this.props;

    return (
      <div className={`Modal ${visible ? 'Modal--visible' : ''}`}>
        <div className="Modal__window">

          <div className="Modal__window-container">
            {children}
          </div>

          <img
            className="Modal__close"
            src={closeIcon}
            onClick={onClose}
            alt="Close window"
          />

        </div>
      </div>
    );
  }
}

export default Modal;
