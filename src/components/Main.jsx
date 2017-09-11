import React, { Component } from 'react';
// import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
// import * as actions from 'actions';

export default class Main extends Component {
  // onLogout(e) {
  //   let {dispatch} = this.props;
  //   e.preventDefault();
  //
  //   dispatch(actions.startLogout());
  // }
  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#">Logout</a>
        </div>
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
