const $ = require('jquery');

module.exports = {
  setTodos(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos() {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText

    // sort todos with non-completed first

    return filteredTodos;
  }
};
