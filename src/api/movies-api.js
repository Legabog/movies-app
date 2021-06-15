import * as axios from "axios";

export const MovieApi = {
  url: `https://yts.mx/api/v2/`,

  getListOfMovies(limit = 20, page = 1) {
    return axios
      .get(`${this.url}list_movies.json?limit=${limit}&page=${page}`)
      .then((response) => response.data);
  },
};
