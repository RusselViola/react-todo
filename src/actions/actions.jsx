export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  }
};

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text: text
  }
};
