import React, { Component } from 'react';
import TodoList from 'TodoList';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Wash the car'
        },
        {
          id: 3,
          text: 'Do the dishes'
        },
        {
          id: 4,
          text: 'Mow the lawn'
        }
      ]
    }
  };

  render() {
    let {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
}
