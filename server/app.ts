import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";

import { authLoader } from "./loader/authLoader";
import BookResolver from "./resolvers/BookResolver";
import AuthorResolver from "./resolvers/AuthorResolver";

async function start() {
  const schema = await buildSchema({
    resolvers: [BookResolver, AuthorResolver],
    emitSchemaFile: true,
  });

  const app = express();

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({
      req,
      res,
      authLoader: authLoader(),
    }),
  });

  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000`);
  });
}

start();
