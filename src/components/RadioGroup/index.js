import React, { Component } from 'react';

import Item from './Item';
import arrowIcon from 'assets/icons/arrow-down.svg';
import './style.less';

class RadioGroup extends Component {
  static Item = Item;

  constructor() {
    super();

    this.state = {
      open: false,
      value: ''
    };
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  toggleRadio(value) {
    debugger;
    this.setState({ value });
  }

  render() {
    const { children, outline } = this.props;
    const { open, value } = this.state;

    let title = '';

    const items = (children instanceof Array ? children : [children]).map(c => {
      const isChecked = value === c.props.value;

      if (isChecked) {
        title = c.props.title;
      }

      return (
        <c.type
          {...c.props}
          key={c.props.value}
          checked={isChecked}
          onClick={() => this.toggleRadio(c.props.value)}
        />
      );
    });

    if (!title) {
      title = this.props.title;
    }

    const innerClassName = [
      'RadioGroup__inner',
      outline && 'RadioGroup__inner--outline',
      open    && 'RadioGroup__inner--visible'
    ].join(' ');

    return (
      <div className="RadioGroup">
        <div className={innerClassName}>
          <div className="RadioGroup__head" onClick={::this.toggleOpen}>
            <div className="RadioGroup__head-title">
              {title}
            </div>

            <img
              className={`RadioGroup__head-arrow ${open ? 'RadioGroup__head-arrow--visible' : ''}`}
              src={arrowIcon}
            />
          </div>

          <div className={`RadioGroup__menu ${open ? 'RadioGroup__menu--visible' : ''}`}>
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default RadioGroup;
