import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import 'dotenv/config';

const app = express();

const schema = gql`
  type Query {
    me: User
    user(id: ID!): User
    users: [User!]
  }
  type User {
    id: ID!
    username: String!
  }
`;

//hard coded 'database'
let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};
// mocked authenticated user
const me = users[1];

// resolvers match schema to actual data
const resolvers = {
  Query: {
    me: () => {
      return me;
    },
    user: (parent, { id }) => {
      return users[id];
    },
    users: () => {
      return Object.values(users);
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});

const userCredentials = { firstname: 'Robin' };
const userDetails = { nationality: 'German' };

const user = {
  ...userCredentials,
  ...userDetails,
};

console.log(user);

console.log(process.env.SOME_ENV_VARIABLE);
