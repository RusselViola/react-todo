const expect = require('expect');
const  reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      let res = reducers.searchTextReducer('', action);

      expect(res).toEqual(action.searchText);
    });
  });
});
