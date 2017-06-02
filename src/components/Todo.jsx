import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    let {text, id, completed} = this.props;
    return (
      <div>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    )
  }
}
