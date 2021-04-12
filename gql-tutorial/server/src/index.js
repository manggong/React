const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const TodoAPI = require('./datasources/todo');
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    todoAPI: new TodoAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
  `);
});
