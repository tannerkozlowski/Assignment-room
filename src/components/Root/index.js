import React, { Component } from 'react';

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
        {this.state.title}
      </div>
    );
  }
}

export default Root;
