import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Main from 'Main';

const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

//load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

console.log(process.env.ENV_TEST)

ReactDOM.render(
  //Router
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app')
);
