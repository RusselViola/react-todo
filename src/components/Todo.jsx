import React, { Component } from 'react';

const {connect} = require('react-redux');
const actions = require('actions');
const moment = require('moment');

export class Todo extends Component {
  render() {
    let {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    let renderDate = () => {
      let message = 'Created: ';
      let timeStamp = createdAt;

      if(completed) {
        message = 'Completed: ';
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
    }
    return (
      <div className={todoClassName} onClick={() => {
        // this.props.onToggle(id);
        dispatch(actions.toggleTodo(id));
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo_subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
}

export default connect()(Todo);
