import React, { Component } from 'react';

const moment = require('moment');

export default class Todo extends Component {
  render() {
    let {text, id, completed, createdAt} = this.props;
    let renderDate = () => {
      let message = 'Created: ';
      let timeStamp = createdAt;

      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
    }
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
}
