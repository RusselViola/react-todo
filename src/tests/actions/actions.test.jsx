const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });
});
