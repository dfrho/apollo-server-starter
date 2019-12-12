import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    dogs: [Dog!]!
    dog(id: ID!): Dog!
  }

  extend type Mutation {
    createDog(name: String!): Dog!
    deleteDog(id: ID!): Boolean!
  }

  type Dog {
    id: ID!
    name: String!
    owner: User!
  }
`;

