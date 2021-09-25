import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;

  grid-template-columns: 1fr 1fr;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .grid {
    width: 100%;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
    } */
  }
`;

export const Card = styled.div`
  width: 360px;
  height: 100%;
  border-radius: 7px;
  background: #fff;

  overflow: hidden;

  position: relative;
  margin: 10px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  img {
    width: 100%;
    height: 162px;
  }
`;

export const CardTitle = styled.h2`
  margin-top: -1.5em;
  padding-bottom: 0.5em;
  padding-left: 0.5em;
  color: #fff;
  font-size: 2em;
`;

export const CardBody = styled.div`
  padding: 0 1em 1em 1em;
  text-align: justify;
`;

export const CardButton = styled.div`
  /* margin: 1em 0 1em 1em; */
  background: var(--color-success);
  border: none;
  font-weight: 700;
  outline: none;
  border-radius: 2px;
  transition: all 0.1s ease-in;
  padding: 15px;
  text-align: center;
  color: var(--color-light);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

      filter: brightness(85%);
  }
`;
