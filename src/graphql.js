import express from 'express';
import path from 'path';
import cors from 'cors';
import {
  mergeTypes,
  fileLoader,
  mergeResolvers,
} from 'merge-graphql-schemas';
import {
  ApolloServer,
} from 'apollo-server-express';

import db from './models';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, './resolvers')),
);

const app = express();
const port = (process.env.PORT || 8000);
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    db,
    req,
    res,
  }),
  playground: {
    endpoint: `http://localhost:${port}/graphql`,
    setings: {
      'editor.theme': 'light',
    },
  },
});

server.applyMiddleware({
  app,
});

if (process.env.NODE_ENV !== 'test') {
  db.sequelize.sync().then(() => {
    app.listen(port, () => console.log(`Running on http://localhost:${port}`));
  });
}

export default app;
