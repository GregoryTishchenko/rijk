import axios from 'axios';

export default class ApiService {
  // Method to fetch collection from the API
  static async getCollection(query = '', page = 1) {
    const key = process.env.REACT_APP_RIJKSMUSEUM_API_KEY;
    const limit = 20;
    const response = await axios.get(
      'https://www.rijksmuseum.nl/api/en/collection',
      {
        params: {
          ps: limit, // Set the limit for the number of results
          key: key, // Pass the API key
          p: page, // Specify the page number
          q: query, // Pass the search query
          imgonly: true, // Retrieve only results with images
        },
      }
    );
    return response;
  }
}
