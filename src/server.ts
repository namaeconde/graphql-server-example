import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import { schema } from "./schema";

(async function startApolloServer() {
  const PORT = process.env.PORT || 4001;
  const app = express();
  app.use(cors());
  app.use(compression());

  const server = new ApolloServer({
      schema
  });
  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });
  const httpServer = createServer(app);
  httpServer.listen({ port: PORT }, (): void =>
    console.log(`🚀GraphQL-Server is running on http://localhost:4001/graphql`)
  );
})();