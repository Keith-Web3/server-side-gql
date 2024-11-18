export const resolvers = {
  Person: {
    name: (parent) => parent.name.toUpperCase(),
  },
  SearchType: {
    __resolveType: (obj) => {
      if (obj.species) {
        return 'Animal'
      }
      return 'Person'
    },
  },
  Query: {
    me: () => 'me',
    people: (_parent, args) => {
      console.log(args)
      return [{ id: '1', name: 'Ola' }]
    },
    search: () => {
      return [
        { species: 'Dog', name: 'Rex' },
        { id: '2', name: 'Ola' },
      ]
    },
  },
}
