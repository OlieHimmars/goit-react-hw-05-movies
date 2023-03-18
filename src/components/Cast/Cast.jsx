import propTypes from 'prop-types';
import noFoto from '../../images/no_poster.png';
import { CastsList, Item, Photo, ActorName } from './Cast.styled';

export default function Cast({ cast }) {
  return (
    <>
      <CastsList>
        {cast.map(({ id, name, photo }) => (
          <Item key={id}>
            {photo ? (
              <Photo
                src={`https://image.tmdb.org/t/p/w300/${photo}`}
                alt={name}
              />
            ) : (
              <img src={noFoto} alt={name} width={300} height={450} />
            )}

            <ActorName>{name}</ActorName>
          </Item>
        ))}
      </CastsList>
    </>
  );
}
Cast.propTypes = {
  cast: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      photo: propTypes.string,
    })
  ).isRequired,
};
