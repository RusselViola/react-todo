import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'main';

//load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

console.log(process.env.ENV_TEST)

ReactDOM.render(
  //Router
  <p>Testing Boilerplate</p>,
  document.getElementById('app')
);
