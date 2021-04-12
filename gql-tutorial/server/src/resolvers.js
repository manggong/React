module.exports = {
  Query: {
    todos: (_, __, { dataSources }) => dataSources.todoAPI.getAllTodos(),
  },
};
