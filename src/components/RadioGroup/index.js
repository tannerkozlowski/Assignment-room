import React, { Component } from 'react';

import Item from './Item';
import arrowIcon from 'assets/icons/arrow-down.svg';
import './style.less';

class RadioGroup extends Component {
  static Item = Item;

  constructor() {
    super();

    this.state = {
      animated: false,
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

  listenClick(e) {
    let { target } = e;

    while (target !== this.containerEl && target !== document.body) {
      target = target.parentNode;
    }

    if (target !== this.containerEl) {
      this.setState({ open: false });
    }
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  toggleRadio(value) {
    this.props.onToggle(value);

    setTimeout(() => this.setState({ open: false }), 50);
  }

  render() {
    const { children, outline, value } = this.props;
    const { open, animated } = this.state;

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
      open    && 'RadioGroup__inner--visible',
      animated && 'RadioGroup__inner--animated'
    ].join(' ');

    return (
      <div className="RadioGroup">
        <div className={innerClassName} ref={node => this.containerEl = node}>
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
