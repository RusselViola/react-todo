import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Main } from 'Main';
import TodoList from 'TodoList';
import { Provider } from 'react-redux';

const configureStore = require('configureStore');

const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

describe('Main', () => {
  it('should exist', () => {
    expect(Main).toExist();
  });

  it('should render TodoList', () => {
    let store = configureStore.configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    let main = TestUtils.scryRenderedComponentsWithType(provider, Main)[0];
    let todoList = TestUtils.scryRenderedComponentsWithType(main, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
