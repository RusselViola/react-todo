import React, { Component } from 'react';
import Todo from 'Todo';
const { connect } = require('react-redux');

export class TodoList extends Component {

  render() {
    let {todos} = this.props;
    let renderTodos = () => {
      if(todos.length === 0) {
        return(
          <p className="container__message">There's nothing to do!</p>
        )
      }
      return(
        todos.map((todo) => {
          return(
            <Todo key={todo.id} {...todo}/>
          )
        })
      )
    }
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoList);
