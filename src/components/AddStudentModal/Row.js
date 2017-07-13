import React, { Component } from 'react';

import TextInput   from '../TextInput/index';
import RadioGroup  from '../RadioGroup/index';
import Button      from '../Button/index';
import removeIcon  from 'assets/icons/remove.svg';

const AddIcon = ({ onClick }) => (
  <Button
    fill
    onClick={onClick}
    className="AddStudentModal__row-action-submit"
    label="Add"
  />
);

const RemoveIcon = ({ onClick }) => (
  <div className="AddStudentModal__row-action-remove" onClick={onClick}>
    <img src={removeIcon} />
  </div>
);

class Row extends Component {
  handleUpdate(field, value) {
    const data = { ...this.props.params };
    data[field] = value;

    this.props.onUpdate(this.props.id, data);
  }

  render() {
    const { id, params, onAdd, onRemove } = this.props;

    const ActionButton = params.isNew ? AddIcon : RemoveIcon;
    const actionCb = params.isNew ? onAdd : () => onRemove(id);

    return (
      <div className="AddStudentModal__row">
        <div className="AddStudentModal__row-id">
          {id}.
        </div>

        <div className="AddStudentModal__row-first-name">
          <TextInput
            key={id + '-first-name-input'}
            placeholder="First name"
            value={params.firstName}
            onChange={e => ::this.handleUpdate('firstName', e.target.value)}
          />
        </div>

        <div className="AddStudentModal__row-first-name">
          <TextInput
            key={id + '-last-name-input'}
            placeholder="Last name"
            value={params.lastName}
            onChange={e => ::this.handleUpdate('lastName', e.target.value)}
          />
        </div>

        <div className="AddStudentModal__row-room">
          <RadioGroup
            value={params.room}
            outline
            title="Select room"
            checked={this.props.rooms}
            onToggle={(value) => ::this.handleUpdate('room', value)}
          >
            <RadioGroup.Item title="Room 1" value="Room 1" />
            <RadioGroup.Item title="Room 2" value="Room 2" />
            <RadioGroup.Item title="Room 3" value="Room 3" />
            <RadioGroup.Item title="Room 4" value="Room 4" />
          </RadioGroup>
        </div>

        <div className="AddStudentModal__row-parent">
          <TextInput
            key={id + '-parent-name-input'}
            placeholder={params.firstName.length > 1 ? `${params.firstName}'s parent` : 'Parent'}
            value={params.parent}
            onChange={e => ::this.handleUpdate('parent', e.target.value)}
          />
        </div>

        <div className="AddStudentModal__row-action">
          <ActionButton onClick={actionCb} />
        </div>
      </div>
    );
  }
}

export default Row;
