import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import BookResolver from "./resolvers/BookResolver";

async function start() {
  const schema = await buildSchema({
    resolvers: [BookResolver],
  });

  const app = express();

  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000`);
  });
}

start();
