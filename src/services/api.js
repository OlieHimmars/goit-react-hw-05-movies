import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const KEY = '992e567e43c913ea6cedbae9c8870c1e';

async function fetchMoviesBySearch(query) {
  const url = `${URL}/search/movie?api_key=${KEY}&query=${query}&page=1`;
  return await axios.get(`${url}`).then(response => response.data);
}

async function fetchTrendingMovies() {
  const trendingURL = `${URL}/trending/movie/day?api_key=${KEY}&page=${1}`;
  return await axios.get(`${trendingURL}`).then(response => response.data);
}

async function fetchMovieDetails(movieId) {
  const detailsURL = `${URL}/movie/${movieId}?api_key=${KEY}&language=en-US`;
  return await axios.get(`${detailsURL}`).then(response => response.data);
}

async function fetchMovieCast(movieId) {
  const castURL = `${URL}/movie/${movieId}/credits?api_key=${KEY}`;
  return await axios.get(`${castURL}`).then(response => response.data);
}

async function fetchMoviesReviews(movieId) {
  const reviewsURL = `${URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`;
  return await axios.get(`${reviewsURL}`).then(response => response.data);
}

export {
  fetchMoviesBySearch,
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMoviesReviews,
};
