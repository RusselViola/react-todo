import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'Main';

const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
const main = Main

describe('Main', () => {
  it('should exist', () => {
    expect(main).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    let todoText = 'test text';
    let main = TestUtils.renderIntoDocument(<Main/>);

    main.setState({todos: []});
    main.handleAddTodo(todoText);

    expect(main.state.todos[0].text).toBe(todoText);
  });
});
