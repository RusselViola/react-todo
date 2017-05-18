import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    let {text, id} = this.props;
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
}
