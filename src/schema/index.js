import { gql } from 'apollo-server-express';

import userSchema from './user';
import messageSchema from './message';
import dogSchema from './dog';

const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, messageSchema, dogSchema];

// TODO: https://www.apollographql.com/docs/apollo-server/federation/migrating-from-stitching/
