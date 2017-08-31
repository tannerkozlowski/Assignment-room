import React, { Component } from 'react';
import Popover from '../Popover';
import TextInput from '../TextInput';
import Button from '../Button';
import './style.less';

class AddRoomPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: ''
    };
  }

  onChange = (evt) => {
    this.setState({ roomName: evt.target.value });
  }

  onSaveRoom = () => {
    const { roomName } = this.state;
    const { onSave, onClose } = this.props;
    onSave(roomName);
    onClose();
    this.setState({ roomName: '' });
  }

  render() {
    const { roomName } = this.state;

    return (
      <Popover {...this.props} position="bottomRight" className="AddRoomPopover">
        <div className="Popover__header">
          Add Room
        </div>
        <div className="Popover__body">
          <TextInput placeholder="ROOM NAME" onChange={this.onChange} value={roomName} />
        </div>
        <div className="Popover__footer">
          <Button className="AddRoomPopover__button" label="SAVE ROOM" disabled={!roomName} onClick={this.onSaveRoom} />
        </div>
      </Popover>
    );
  }
}

export default AddRoomPopover;
