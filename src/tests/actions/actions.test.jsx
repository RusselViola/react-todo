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

  it('should generate toggle show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    let res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      todo: {
        id: '123abc',
        text: 'Literally anything',
        completedAt: false,
        createdAt: 0
      }
    };
    let res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    let todos = [{
      id: '111',
      text: 'anything',
      completed: undefined,
      completedAt: undefined,
      createdAt: 33000
    }];
    let action = {
      type: 'ADD_TODOS',
      todos: todos
    };
    let res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };
    let res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
