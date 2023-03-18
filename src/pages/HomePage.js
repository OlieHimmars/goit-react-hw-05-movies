import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { mapper } from 'utils/mapper';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(movies => {
      const mappedMovies = mapper(movies.results);
      setMovies(mappedMovies);
    });
  }, []);
  // console.log(movies);
  return movies && <MoviesList movies={movies} />;
}
