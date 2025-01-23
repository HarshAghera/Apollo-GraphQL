const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const TrackAPI = require("./datasources/track-api");

/**
 * Initializes and starts the Apollo Server.
 * This function sets up the server with the provided schema and resolvers,
 * configures the context with data sources, and starts the server.
 *
 * @async
 * @function startApolloServer
 * @returns {Promise<void>} A promise that resolves when the server has started successfully.
 */
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;

      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache })
        }
      };
    }
  });

  console.log(`
    🚀  Server is running
    📭  Query at ${url}
  `);
}

startApolloServer();
