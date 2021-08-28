import styled from "styled-components";

export const Container = styled.div`

  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  padding: 25px 10%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--color-light);
  text-align: center;


  h1 {
    font-size: 4em;
  }

  hr {
    width: 90%;
  }

  p {
    font-size: 2em;
  }
`;
