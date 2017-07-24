import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Main from 'Main';

const actions = require('actions');
const store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state:', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted(''));

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
