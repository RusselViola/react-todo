import React from 'react';
import ReactDOM from 'react-dom';
import Todo from 'Todo';

const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
});
