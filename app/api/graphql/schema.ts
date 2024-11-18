export const schema = `#graphql
  type Animal {
    species: String!
    name: String!
  }
  type Person  {
    name: String!,
    id: ID!
  }
  union SearchType = Animal | Person
  type Query {
    me: String,
    people(id: ID!) : [Person!]
    search: [SearchType]
  }
`
