import userResolvers from './user';
import messageResolvers from './message';
import dogResolvers from './dog';

import { GraphQLDateTime } from 'graphql-iso-date';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  userResolvers,
  messageResolvers,
  dogResolvers
];
