import styled from "styled-components";

export const Container = styled.div`
  background-repeat: no-repeat;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* grid-template-rows: 1fr; 
  gap: 0px 0px; 
  justify-content: center; 
  align-content: center;  */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-light);

  &:nth-child(2) {
    align-items: flex-end;
  }

  div.left-container {
    p {
      font-size: 35px;

      .highlight {
        color: var(--color-danger);
        font-size: 52px;
      }

      &:nth-child(2) {
        margin-top: 40px;
      }
    }
  }

  div.right-container {
    background-color: var(--color-light);
    color: var(--color-dark);

    width: 85%;

    padding: 15px 7%;

    margin: 15px;
    border-radius: 25px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 32px;
      text-align: center;
    }

    hr {
      border: none;
      border: 1px solid var(--color-dark);
      margin-top: 10px;
      margin-bottom: 10px;
      width: 80%;
      text-align: center;
      border-radius: 35px;
      opacity: 0.5;
    }

    .formGroup {
      width: 100%;

      input[type="submit"] {
        color: var(--color-light);
        background: var(--color-danger);
        padding: 15px 20px;
        border-radius: 7px;
        border: none;
        transition: all 0.5s ease-in-out;
        cursor: pointer;

        &:hover {
          background: #bf3f3f;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
      height: 100%;

      .left-container {
        padding-top: 90px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 15px;
      }

      .right-container {
        justify-content:  center;
      }
    }
`;

export const FirstBlock = styled.div``;

