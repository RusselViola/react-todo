import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from 'TodoList';
import Todo from 'Todo';

const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    let todos = [
      {
        id: 1,
        text: 'Do something'
      },
      {
        id: 2,
        text: 'Check mail'
      }
    ];
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});