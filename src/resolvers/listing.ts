export default {
  Query: {
    listings: async (parent:any, args:any, context:any) => {
      const { page, filters } = args;
      const { models } = context;
      const perPage = 10, pageRequested = Math.max(0, 0, isNaN(page) ? -Infinity : page);
      const results = await models.Listing.find(filters).limit(perPage).skip(perPage * pageRequested);
      return results
    },
    listing: async (parent:any, args:any, context:any) => {
      const { _id } = args;
      const { models } = context;
      const results = await models.Listing.find({ _id: _id })
      return results
    },
  }
}