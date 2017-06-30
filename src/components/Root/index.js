import React, { Component } from 'react';

import Students from '../Students';
import './style.less';

class Root extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Frontend Assignment'
    };
  }

  render() {
    return (
      <div className="Root">
        <Students />
      </div>
    );
  }
}

export default Root;
