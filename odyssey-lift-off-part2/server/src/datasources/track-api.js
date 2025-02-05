const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  /**
   * Fetches all tracks for the home page.
   * @returns {Promise<Array>} A promise that resolves to an array of track objects.
   */
  getTracksForHome() {
    return this.get("tracks");
  }

  /**
   * Retrieves author information by their ID.
   * @param {string} authorId - The unique identifier of the author.
   * @returns {Promise<Object>} A promise that resolves to an object containing author details.
   */
  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
}

module.exports = TrackAPI;
