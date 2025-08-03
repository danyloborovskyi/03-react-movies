import axios from "axios";

const myKey = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3/search/movie"

export default async function fetchMovies(query: string) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query: query,
        language: 'uk-UA',
        include_adult: false,
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${myKey}`,
        accept: 'application/json',
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Помилка при запиті до TMDb:', error);
    throw error;
  }
}