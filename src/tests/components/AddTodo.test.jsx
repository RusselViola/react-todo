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
});
