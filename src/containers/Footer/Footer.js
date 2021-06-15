import { MovieApi } from "../../api";
import styled from "styled-components";

import Pagination from "@material-ui/lab/Pagination";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;

  & .MuiPaginationItem-root {
    color: #aaaaaa;
  }
  & button {
    color: #aaaaaa;
    background-color: #555555;
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
  & button:hover {
    background-color: white;
  }
  & button:active {
    background-color: #fff333;
    color: #353535;
  }
  & .MuiPaginationItem-page.Mui-selected {
    background-color: #fff333;
    color: #353535;
  }
  & .MuiPaginationItem-page.Mui-selected:hover {
    background-color: #fff333;
    color: #353535;
  }
`;

export const Footer = ({
  movieCount,
  currentPage,
  limitElements,
  setCurrentPage,
  setFetching,
  setMoviesData,
}) => {
  const pagesCount = Math.ceil(movieCount / limitElements);

  const changeHandler = (e) => {
    const page = +e.target.innerText;

    setCurrentPage(page);
    setFetching(true);
    MovieApi.getListOfMovies(limitElements, page)
      .then((data) => {
        setMoviesData(data.data);
        setFetching(false);
      })
      .catch((e) => setFetching(false))
      .finally(() => setFetching(false));
  };

  return (
    <Wrapper>
      <Pagination
        count={pagesCount}
        page={currentPage}
        onChange={changeHandler}
        variant="outlined"
        shape="rounded"
        hideNextButton
        hidePrevButton
      />
    </Wrapper>
  );
};
