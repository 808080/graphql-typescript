import { ApolloServer } from 'apollo-server';
import { schema } from './schema';
import { context } from './context';
import { NODE_ENV, PORT as port } from './utils/constants';

export const server = new ApolloServer({
  schema,
  context,
  introspection: NODE_ENV === 'development'
});

server.listen({ port }).then(({ url }) => {
  console.log(`Running at ${url}`);
});