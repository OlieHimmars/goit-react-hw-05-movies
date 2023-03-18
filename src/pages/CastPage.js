import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import Cast from 'components/Cast/Cast';
import { NoInformationText } from 'components/Cast/Cast.styled';

export default function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(all => {
      const mappedActors = [];
      all.cast.map(({ id, original_name, profile_path }) => {
        const actor = {
          id: id,
          name: original_name,
          photo: profile_path,
        };
        return mappedActors.push(actor);
      });
      setCast(mappedActors);
    });
  }, [movieId]);

  return cast && cast.length > 0 ? (
    <Cast cast={cast} />
  ) : (
    <NoInformationText>Sorry, we have no information here</NoInformationText>
  );
}
