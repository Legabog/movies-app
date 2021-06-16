import styled from "styled-components";

import { Preloader, MovieItem } from "../../pres-components";
import { BodyTitle } from "./components";

const Wrapper = styled.div`
  width: 100%;
`;

const FilmContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilmContainer = styled.div``;

const ErrorCointainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Error = styled.span`
  color: red;
  font-size: 30px;
`;

export const Body = ({ isFetching, moviesData, movieCount, isError }) => {
  const getError = () =>
    isError ? (
      <ErrorCointainer>
        <Error>Opps, something went wrong...</Error>
      </ErrorCointainer>
    ) : null;
  const getMovieItems = () =>
    moviesData.length !== 0
      ? moviesData.movies.map((e, index) => (
          <MovieItem key={`movie-item_${index}`} movieData={e} />
        ))
      : null;

  return (
    <Wrapper>
      <BodyTitle movieCount={movieCount} />
      {getError()}
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
