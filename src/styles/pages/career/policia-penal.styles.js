import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AllTabs = styled.div`
  width: 100vw;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
`;

export const TabIcon = styled.div`
  width: 250px;
  padding: 15px 25px;
  border-radius: 0 0 15px 15px;
  background: var(--color-light);

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;

  cursor: pointer;

  svg {
    font-size: 18px;
    margin-right: 7px;
  }

  @media screen and (max-width: 768px) {
    border: 1px solid var(--color-dark);
    border-radius: 0;
  }
`;

export const TabContent = styled.div`
  padding: 70px;
  background: rgba(0, 0, 0, 0.2);

  font-size: 17px;

  font-weight: 600;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  div {
    color: var(--color-dark);
    background-color: var(--color-light);
    border-radius: 8px;
    padding: 15px;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px ) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
