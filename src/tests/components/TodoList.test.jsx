import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from 'TodoList';

const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
});
