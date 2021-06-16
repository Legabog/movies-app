import styled from "styled-components";

import { Preloader, MovieItem } from "../../pres-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  padding: 0px 30px;
  color: #fff;
`;

const FilmContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilmContainer = styled.div``;

export const Body = ({ isFetching, moviesData, movieCount }) => {
  const getMovieCount = () =>
    movieCount !== null ? `There are ${movieCount} movies.` : null;
  const getMovieItems = () =>
    moviesData.length !== 0
      ? moviesData.movies.map((e, index) => (
          <MovieItem key={`movie-item_${index}`} movieData={e} />
        ))
      : null;

  return (
    <Wrapper>
      <Title>
        All movies. &nbsp;
        {getMovieCount()}
      </Title>
      <FilmContainerWrapper>
        {isFetching ? (
          <Preloader />
        ) : (
          <FilmContainer>{getMovieItems()}</FilmContainer>
        )}
      </FilmContainerWrapper>
    </Wrapper>
  );
};
