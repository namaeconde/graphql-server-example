import { gql } from 'apollo-server-express';

export default gql `
  input Filters {
    bedrooms: Int, 
    beds: Int,
    bathrooms: Float,
    amenities: [String]
  }
  type Listing {
    _id: ID!
    name: String,
    bedrooms: Int,
    beds: Int,
    bathrooms: Float,
    amenities: [String]
  }
  type Query {
    listings(page: Int, filters: Filters): [Listing],
    listing(_id: ID!): [Listing]
  }
`