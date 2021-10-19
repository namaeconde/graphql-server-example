import { makeExecutableSchema } from "graphql-tools";
import { TypeDefs } from "./service/serviceSchema";
import Resolvers from "./service/serviceResolver";

export const schema = makeExecutableSchema({
  typeDefs: TypeDefs,
  resolvers: Resolvers,
});