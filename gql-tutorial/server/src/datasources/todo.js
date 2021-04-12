const { RESTDataSource } = require('apollo-datasource-rest');

// REST convert to GQL
class TodoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://jsonplaceholder.typicode.com';
  }

  async getAllTodos() {
    const response = await this.get('todos');
    return Array.isArray(response)
      ? response.map((todo) => this.todoReducer(todo))
      : [];
  }

  todoReducer(todo) {
    // data parsing해서 schema에 맞춰 줌
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    };
  }
}

module.exports = TodoAPI;
