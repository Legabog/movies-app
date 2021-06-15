import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import styled from "styled-components";

import rate from "../../assets/logos/logo-imdb.svg";
import { Comment } from "../Comment";

const Wrapper = styled.div`
  max-width: 400px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-left: 70px;
`;

const SecondWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const FilmPart = styled.div`
  width: 200px;
`;

const CommentsPart = styled.div`
  color: #aaaaaa;
  background-color: #555555;
  width: 200px;
  height: 300px;
  padding: 0px 10px;
`;

const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;

  transition-duration: 0.2s;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Rate = styled.div`
  margin-top: 3px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
`;

const RateImg = styled.img``;

const RateRating = styled.h2`
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
`;

const Title = styled.h2`
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
`;

const Description = styled.span`
  color: #bbbbbb;
`;

const CommentsTitle = styled.span`
  color: #bbbbbb;
  padding-bottom: 10px;
`;

const CommentsContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 200px;
  overflow: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    width: 2px;
    background: #555555;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: #aaaaaa;
    border-radius: 2px;
  }
`;

const CommentsInput = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  background-color: #222222;
  cursor: pointer;
  color: #fff;
`;

const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  border-radius: 4px;
  width: 100%;
  height: 22px;
  background-color: #222222;
  color: #fff;
  transition-duration: 0.2s;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const MovieItem = ({ movieData }) => {
  const [commnets, setComments] = useState([
    "Awesome film!",
    "brrr boring...",
    "Not bad)",
    "One of the most stupid film in the world!",
    "Hi guys. In my opinion this film has the worst ending.",
    "Don't watch.",
    "Waste of time.",
    "Pretty nice film.",
  ]);

  const [
    inputValue,
    inputRef,
    inputChangeHandler,
    ,
    inputFocusHandler,
    inputBlurHandler,
    inputSetValue,
  ] = useInput("");

  const clickHandler = () => {
    if (inputValue.length !== 0) {
      setComments([...commnets, inputValue]);
      inputSetValue("");
    }
  };

  const keydownClickHandler = (e) => {
    if (e.keyCode === 13) {
      clickHandler();
    }
  };

  return (
    <Wrapper>
      <SecondWrapper>
        <FilmPart>
          <Image src={movieData.medium_cover_image} />
        </FilmPart>
        <CommentsPart>
          <CommentsTitle>Commentary</CommentsTitle>
          <CommentsContainer>
            {commnets.map((e, index) => (
              <Comment
                key={`comment_${index}`}
                text={e}
                index={index + 1}
                setComments={setComments}
                commnets={commnets}
              />
            ))}
          </CommentsContainer>
          <CommentsInput>
            <Input
              placeholder="Type some message"
              name="comments-input"
              type="text"
              autoComplete="off"
              ref={inputRef}
              value={inputValue}
              onChange={inputChangeHandler}
              onFocus={inputFocusHandler}
              onBlur={inputBlurHandler}
              onKeyDown={keydownClickHandler}
            />
          </CommentsInput>
          <InputButton
            disabled={inputValue.length ? false : true}
            onClick={clickHandler}
          >
            Send
          </InputButton>
        </CommentsPart>
      </SecondWrapper>
      <Rate>
        <RateImg src={rate} />
        <RateRating>&nbsp;·&nbsp;{movieData.rating}</RateRating>
      </Rate>
      <Title>
        {movieData.title_english} · {movieData.year}
      </Title>
      <Description>
        {movieData.genres !== undefined
          ? movieData.genres.map((e, index) =>
              index === movieData.genres.length - 1 ? e : `${e}, `
            )
          : null}
      </Description>
    </Wrapper>
  );
};
