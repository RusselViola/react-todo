const expect = require('expect');
const  reducers = require('reducers');
const df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      let res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });
  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
  });
});
