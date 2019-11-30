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

// resolvers match schema to actual data
const resolvers = {
  Query: {
    me: (parent, arg, { me }) => {
      return me;
    },
    user: (parent, { id }) => {
      return users[id];
    },
    users: () => {
      return Object.values(users);
    },
  },
  User: {
    username: user => {
      return user.username
    },
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    me: users[1] // mocked auth user set to context
  }
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
