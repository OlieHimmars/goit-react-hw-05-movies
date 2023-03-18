import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import GoBackButton from 'components/GoBackBtn/GoBackBtn';
import {
  MainWrapper,
  Section,
  Image,
  InfoThumb,
  TitleWrapper,
  Title,
  SubTitle,
  InfoText,
  ExtraInfo,
  Wrapper,
  AdditionalText,
  ExtraPagesList,
  Item,
  StyledLink,
} from './MovieInfo.styled';
import noPoster from '../../images/no_poster.png';

export default function MovieInfo({ movieDetails }) {
  const { title, genres, poster, overview, vote } = movieDetails;
  const location = useLocation();
  const genresInfo = genres.map(genres => genres.name).join(', ');
  return (
    <MainWrapper>
      <GoBackButton location={location} />
      <Section>
        <Image
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPoster}
          alt={title}
        />
        <InfoThumb>
          
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
          <SubTitle>User score: {vote}</SubTitle>
          <SubTitle>Overview:</SubTitle>
          <InfoText> {overview}</InfoText>
          <SubTitle>Genres:</SubTitle>
          <InfoText> {genresInfo}</InfoText>
          
        </InfoThumb>
      </Section>

      <ExtraInfo>
        <Wrapper>
          <AdditionalText>Additional Information</AdditionalText>
        </Wrapper>

        <ExtraPagesList>
          <Item>
            <StyledLink to="cast" state={location.state}>
              Cast
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="reviews" state={location.state}>
              Reviews
            </StyledLink>
          </Item>
        </ExtraPagesList>
      </ExtraInfo>
    </MainWrapper>
  );
}

MovieInfo.propTypes = {
  movieDetails: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      })
    ),
    poster: propTypes.string,
    overview: propTypes.string,
    vote: propTypes.number,
  }),
};
