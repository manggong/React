const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
  # 리턴되는 데이터의 타입 지정
  type Todo {
    id: ID!
    title: String
    completed: Boolean!
  }
  # data read용
  type Query {
    todos: [Todo]!
  }
`;

module.exports = typeDefs;
