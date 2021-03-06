import { ApolloError } from "apollo-server-errors";

export default {
    Query: {
      users: async (_: any, args: any) => {
        try {
          const mockUsers = [{ name: "xyz" }, { name: "abc" }];
          return mockUsers;
        } catch (error: any) {
          throw new ApolloError(error);
        }
      },
    },
  };