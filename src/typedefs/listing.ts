import { gql } from 'apollo-server-express';

export default gql `
  type Listing {
    _id: ID!
    name: String
  }
  type Query {
    listings(page: Int): [Listing],
    listing(_id: ID!): [Listing]
  }
`