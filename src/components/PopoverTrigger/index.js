import React, { Component } from 'react';

class PopoverTrigger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverVisible: false
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = () => {
    this.closePopover();
  }

  handleInsideClick = (evt) => {
    evt.stopPropagation();
    evt.nativeEvent.stopImmediatePropagation();
  }

  openPopover = () => {
    this.setState({ popoverVisible: true });
  }

  closePopover = () => {
    this.setState({ popoverVisible: false });
  }

  render() {
    const { popover, children } = this.props;
    const { popoverVisible } = this.state;

    return (
      <div className="Popover__wrapper" onClick={this.handleInsideClick}>
        { React.Children.map(children, (child) => React.cloneElement(child, { onClick: this.openPopover }) )}
        { React.cloneElement(popover, { onClose: this.closePopover, visible: popoverVisible })}
      </div>
    );
  }
}

export default PopoverTrigger;
