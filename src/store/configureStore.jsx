const {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

const redux = require('redux');

export const configure = () => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  })

  let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension(): f => f
  ))

  return store;
};
