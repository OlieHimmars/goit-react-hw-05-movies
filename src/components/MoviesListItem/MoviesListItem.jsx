import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Item, Info, Title } from './MoviesListItem.styled';

function MoviesListItem({ id, title }) {
  const location = useLocation();

  return (
    <Item>
      <Link
        to={`/movies/${id}`}
        state={{ from: location.pathname + location.search }}
      >
        <Info>
          <Title>{title ? title : 'No Title'}</Title>
        </Info>
      </Link>
    </Item>
  );
}
MoviesListItem.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
};
export default MoviesListItem;
