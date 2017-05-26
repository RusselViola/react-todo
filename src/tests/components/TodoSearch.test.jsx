import React from 'react';
import ReactDOM from 'react-dom';
import Todo from 'TodoSearch';

const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
});
