import React, { Component } from 'react';
import cx from 'classnames';
import './style.less';
import closeIcon   from 'assets/icons/close.svg';

class Popover extends Component {
  render() {
    const { visible, children, position, className, onClose } = this.props;

    const popoverClassName = cx('Popover', className, {
      'Popover--visible': visible
    }, `Popover--${position}`);

    return (
      <div className={popoverClassName}>
        { children }

        <img
          className="Popover__close"
          src={closeIcon}
          onClick={onClose}
          alt="Close Popover"
        />
      </div>
    );
  }
}

export default Popover;
