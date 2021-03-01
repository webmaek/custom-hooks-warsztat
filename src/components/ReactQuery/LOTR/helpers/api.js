import axios from "axios";

const API_KEY = "jBKooaheIwXIGgIUVD7s";

export const fetchBooks = () => {
  return axios
    .get("https://the-one-api.dev/v2/book", {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Oh no something went wrong");
    });
};

export const fetchMovies = () => {
  return axios
    .get("https://the-one-api.dev/v2/movie", {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Oh no something went wrong");
    });
};

export const fetchCharacters = (page) => {
  return axios
    .get("https://the-one-api.dev/v2/character", {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        page,
        limit: 10,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Oh no something went wrong");
    });
};
