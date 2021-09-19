import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-light);
  color: var(--color-dark);

  a {
    color: var(--color-light);
  }
  .block {
    width: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-success);
    margin: 10px;
    border-radius: 7px;
    font-size: 27px;
    font-weight: 700;
    padding: 15px 25px;
    transition: all .5s ease-in-out;

    &:hover {
      background-color: #45bf22;
    }
  }
`;
