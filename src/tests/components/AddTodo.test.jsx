import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from 'AddTodo';

const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo props with valid data', () => {
    let todoText = 'Check mail';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });
  it('should not call onAddTodo props with invalid input', () => {
    let todoText = '';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(todoText);
  });
});
