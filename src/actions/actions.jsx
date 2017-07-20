export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  }
};

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text: text
  }
};
