import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import { makeExecutableSchema } from "graphql-tools";
import typedefs from "./typedefs";
import resolvers from "./resolvers";
import models, { connectDb } from "./db";

export const schema = makeExecutableSchema({
  typeDefs: typedefs,
  resolvers: resolvers,
});

const PORT = process.env.PORT || 4001;
const app = express();
app.use(cors());
app.use(compression());

(async function startApolloServer() {
  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => {
      return {
        req,
        res,
        models
      }
    }
  });
  await server.start();

  connectDb().then(async (result) => {
    console.log(`Connected to ${result.connection.db.namespace}`);
    server.applyMiddleware({ app, path: "/graphql" });
    const httpServer = createServer(app);
    httpServer.listen({ port: PORT }, (): void =>
      console.log(`🚀GraphQL-Server is running on http://localhost:${PORT}/graphql`)
    );
  })
})();