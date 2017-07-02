import React, { Component } from 'react';

import Item from './Item';
import arrowDownIcon from 'assets/icons/arrow-down.svg';
import './style.less';

class CheckboxGroup extends Component {
  static Item = Item;

  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  handleToggle(value) {
    const { filterName, onToggle } = this.props;

    if (!filterName || !onToggle) {
      return;
    }

    onToggle(filterName, value);
  }

  render() {
    const { open } = this.state;
    const { title, children, checked } = this.props;

    if (!children) {
      return null;
    }

    const items = (children instanceof Array ? children : [children]).map(c => {
      const { value } = c.props;
      const isChecked = checked[value];

      return (
        <c.type
          {...c.props}
          key={value}
          checked={isChecked}
          onClick={() => this.handleToggle(value)}
        />
      );
    });

    return (
      <div className="CheckboxGroup">
        <div className="CheckboxGroup__inner">
          <div className="CheckboxGroup__head" onClick={::this.handleClick}>
            <div className="CheckboxGroup__title">
              {title}
            </div>

            <img
              className={`CheckboxGroup__arrow-down ${open ? 'CheckboxGroup__arrow-down--active' : ''}` }
              src={arrowDownIcon}
            />
          </div>

          <div className={`CheckboxGroup__menu ${open ? 'CheckboxGroup__menu--visible' : ''}`}>
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxGroup;
