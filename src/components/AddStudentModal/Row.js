import React, { Component } from 'react';

import TextInput   from '../TextInput';
import RadioGroup  from '../RadioGroup';
import Button      from '../Button';
import removeIcon  from 'assets/icons/remove.svg';

const AddIcon = () => (
  <Button
    fill
    className="AddStudentModal__row-action-submit"
    label="Add"
  />
);

const RemoveIcon = ({ onClick }) => (
  <div className="AddStudentModal__row-action-remove">
    <img src={removeIcon} />
  </div>
);

class Row extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      room: '',
      parent: '',

      rooms: {
        one: false,
        two: true,
        three: false,
        four: false
      }
    };
  }

  render() {
    const { id } = this.props;

    const ActionButton = true ? AddIcon : RemoveIcon;

    return (
      <div className="AddStudentModal__row">
        <div className="AddStudentModal__row-id">
          {id}.
        </div>

        <div className="AddStudentModal__row-first-name">
          <TextInput placeholder="First name" />
        </div>

        <div className="AddStudentModal__row-last-name">
          <TextInput placeholder="Last name" />
        </div>

        <div className="AddStudentModal__row-room">
          <RadioGroup outline title="Room" checked={this.state.rooms}>
            <RadioGroup.Item title="Room 1" value="one" />
            <RadioGroup.Item title="Room 2" value="two" />
          </RadioGroup>
        </div>

        <div className="AddStudentModal__row-parent">
          <TextInput placeholder="Parent" />
        </div>

        <div className="AddStudentModal__row-action">
          <ActionButton />
        </div>
      </div>
    );
  }
}

export default Row;
