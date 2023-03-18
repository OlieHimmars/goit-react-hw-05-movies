import propTypes from 'prop-types';
import { List, Title } from './MoviesList.styled';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

export const MoviesList = ({ movies }) => {
  return (
    <>
      <Title>Trending today</Title>
    
    <List>
      {movies.map(({ id, original_title }) => {
        return (
          <MoviesListItem
            key={id}
            id={id}
            title={original_title}
          />
        );
      })}
    </List>
    </>
  );
};


export const SearchMoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, original_title }) => {
        return (
          <MoviesListItem
            key={id}
            id={id}
            title={original_title}
          />
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      original_title: propTypes.string.isRequired,
    })
  ),
};

SearchMoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      original_title: propTypes.string.isRequired,
    })
  ),
};