import React, { Component } from 'react';

import Checkbox    from '../Checkbox';
import TextInput   from '../TextInput';
import RadioGroup  from '../RadioGroup';
import saveIcon    from 'assets/icons/save.svg';

class EditRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.student.firstName,
      lastName:  props.student.lastName,
      room:      props.student.room
    };
  }

  changeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  changeLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  changeRoom(value) {
    this.setState({ room: value });
  }

  render() {
    const { id, onUpdate } = this.props;
    return (
      <tr className="StudentList__list-table-row--edit">
        <td className="StudentList__list-table-row-checkbox">
          <Checkbox checked={false} />
        </td>

        <td className="StudentList__list-table-row-name">
          <div className="StudentList__list-table-row-info">
            <TextInput
              placeholder="First name"
              value={this.state.firstName}
              onChange={::this.changeFirstName}
            />

            <TextInput
              placeholder="Last name"
              value={this.state.lastName}
              onChange={::this.changeLastName}
            />
          </div>
        </td>

        <td className="StudentList__list-table-row-status">
          Enrolled
        </td>

        <td className="StudentList__list-table-room">
          <RadioGroup
            outline
            value={this.state.room}
            title="Rooms"
            onToggle={::this.changeRoom}
          >
            <RadioGroup.Item title="Room 1" value="Room 1" />
            <RadioGroup.Item title="Room 2" value="Room 2" />
            <RadioGroup.Item title="Room 3" value="Room 3" />
            <RadioGroup.Item title="Room 4" value="Room 4" />
          </RadioGroup>
        </td>

        <td className="StudentList__list-table-row-save" onClick={() => onUpdate(id, this.state)}>
          <img src={saveIcon} />
        </td>
      </tr>
    );
  }
}

export default EditRow;
