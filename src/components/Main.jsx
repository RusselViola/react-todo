import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

// const TodoAPI = require('TodoAPI');
const uuid = require('node-uuid');
const moment = require('moment');

export default class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // showCompleted: false,
  //     // searchText: '',
  //     // todos: TodoAPI.getTodos()
  //   }
  //   this.handleAddTodo = this.handleAddTodo.bind(this);
  //   this.handleSearch = this.handleSearch.bind(this);
  // };

  // handleAddTodo(text) {
  //   this.setState({
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         id: uuid(),
  //         text: text,
  //         completed: false,
  //         createdAt: moment().unix(),
  //         completedAt: undefined
  //       }
  //     ]
  //   });
  // }

  // handleSearch(showCompleted, searchText) {
  //   this.setState({
  //     showCompleted: showCompleted,
  //     searchText: searchText.toLowerCase()
  //   })
  // }

  render() {
    // let {todos, showCompleted, searchText} = this.state;
    // let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">TodoDux</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container ">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
