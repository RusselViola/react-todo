import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'Main';

const configureStore = require('configureStore');
const {Provider} = require('react-redux');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
const TodoList = require('TodoList');
const main = Main;

describe('Main', () => {
  it('should exist', () => {
    expect(main).toExist();
  });

  it('should render TodoList', () => {
    let store = configureStore.configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Main/>
      </Provider>
    );

    let Main = TestUtils.scryRenderedComponentsWithType(provider, Main)[0]
    let todoList = TestUtils.scryRenderedComponentsWithType(Main, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
