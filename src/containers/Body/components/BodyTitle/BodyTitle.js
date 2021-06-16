import styled from "styled-components";

const Title = styled.h2`
  padding: 0px 30px;
  color: #fff;
`;

export const BodyTitle = ({ movieCount }) => {
  const getMovieCount = () =>
    movieCount !== null && movieCount !== undefined ? ` There are ${movieCount} movies.` : "";

  return <Title>{`All movies.${getMovieCount()}`}</Title>;
};
