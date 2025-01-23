process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const resolvers = {
  Query: {
    /**
     * Retrieves an array of Tracks for populating the homepage grid of the web client.
     * @param {Object} context - The context object containing data sources.
     * @param {Object} context.dataSources - The data sources object.
     * @param {Object} context.dataSources.trackAPI - The Track API data source.
     * @returns {Promise<Array>} A promise that resolves to an array of Track objects.
     */
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    }
  },
  Track: {
    /**
     * Retrieves the Author for a given Track.
     * @param {Object} parent - The parent Track object.
     * @param {string} parent.authorId - The ID of the author to retrieve.
     * @param {Object} context - The context object containing data sources.
     * @param {Object} context.dataSources - The data sources object.
     * @param {Object} context.dataSources.trackAPI - The Track API data source.
     * @returns {Promise<Object>} A promise that resolves to the Author object.
     */
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    }
  }
};

module.exports = resolvers;
