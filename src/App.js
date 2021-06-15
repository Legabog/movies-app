import { MovieApi } from "./api";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Header, Body, Footer } from "./containers";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #353535;
`;

const App = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitElements] = useState(25);

  useEffect(() => {
    const getData = () => {
      setFetching(true);
      MovieApi.getListOfMovies(limitElements, currentPage)
        .then((data) => {
          setMoviesData(data.data);
          setFetching(false);
        })
        .catch((e) => setFetching(false))
        .finally(() => setFetching(false));
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <Body
        isFetching={isFetching}
        movieCount={moviesData.movie_count || null}
        moviesData={moviesData}
      />
      <Footer
        movieCount={moviesData.movie_count || null}
        currentPage={currentPage}
        limitElements={limitElements}
        setCurrentPage={setCurrentPage}
        setFetching={setFetching}
        setMoviesData={setMoviesData}
      />
    </Wrapper>
  );
};

export default App;
