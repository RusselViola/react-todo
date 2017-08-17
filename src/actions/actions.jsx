import firebase, {firebaseRef} from 'src/firebase/';
import moment from 'moment';

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

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo: todo
  }
};

export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    let todo = {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    }
    let todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }))
    })
  }
};

export const addTodos = (todos) => {
 return {
    type: 'ADD_TODOS',
    todos: todos
  }
};

export const updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id: id,
    updates: updates
  }
};

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child(`todos/${id}`);
    let updates = {
      completed: completed,
      completedAt: completed ? moment.unix() : null
    }

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    })
  }
};
