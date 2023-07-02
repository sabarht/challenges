import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox isBlack={isBlack}></StyledBox>;
}

const StyledBox = styled.div`
  background-color: ${({ isBlack }) => (isBlack ? "black" : "green")};
  width: 100px;
  height: 100px;
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;
