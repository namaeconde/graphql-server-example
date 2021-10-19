import { gql } from 'apollo-server-express';

export const TypeDefs = gql `
  type User {
    name: String
  }
  type Query {
    getAllUsers: [User]
  }
`