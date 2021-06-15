import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff333;
`;

const Title = styled.h1`
  padding-left: 30px;
`;

export const Header = (props) => {
  return (
    <Wrapper>
      <Title>Movies app</Title>
    </Wrapper>
  );
};
