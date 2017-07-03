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

    this.listenClick = this.listenClick.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.state.open && nextState.open) {
      this.setState({ animated: true });
      document.addEventListener('click', this.listenClick);
    } else if (this.state.open && !nextState.open) {
      setTimeout(() => {
        this.setState({ animated: false });
        document.removeEventListener('click', this.listenClick);
      }, 200);
    }
  }


  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  toggleCheckbox(value) {
    const { filterName, onToggle } = this.props;

    if (!filterName || !onToggle) {
      return;
    }

    onToggle(filterName, value);
  }

  listenClick(e) {
    let { target } = e;

    while (target !== this.containerEl && target !== document.body) {
      target = target.parentNode;
    }

    if (target !== this.containerEl) {
      this.setState({ open: false });
    }
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
          onClick={() => this.toggleCheckbox(value)}
        />
      );
    });

    return (
      <div className="CheckboxGroup">
        <div className="CheckboxGroup__inner" ref={node => this.containerEl = node}>
          <div className="CheckboxGroup__head" onClick={::this.toggleOpen}>
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
