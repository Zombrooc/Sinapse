import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  background: var(--color-light);
  display: flex;

  z-index: 4444;

  /* padding: 0.5rem 7rem; */

  /* position: fixed;
  top: 0;
  left: 0; */
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  /* margin: 0.5rem 7rem; */
  flex-wrap: wrap;
  overflow: hidden;

  @media screen and (max-width: 630px) {
    margin: 0.2rem 3rem;
  }

  @media screen and (max-width: 400px) {
    margin: 0.1rem 0.5rem;
  }
`;

export const Title = styled.div`
  a {
    //Remover esses elementos depois
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: 0 !important;

      width: 20%;
    }
  }

  /* @media screen and (max-width: 961px) {
    width: 50%;
  }

  @media screen and (max-width: 340px) {
    img {
      width: 10rem;
    }
  } */
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.isOpen ? "100vw" : "0")};
    height: 100vh;
    background: var(--color-dark);
    transition: width 0.5s ease;
    overflow: hidden;

    a {
      color: var(--color-dark);
    }

    span.username {
      margin: 0 !important;
    }
  }
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700 !important;

  &:not(:first-child) {
    margin-left: 15px;
  }

  a,
  button {
    font-weight: 500;
    border: none;
    text-transform: uppercase;
    padding: 1rem 2.5rem;
    background-color: transparent;
    transform: 0.5s;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    color: var(--color-light);
    font-size: 0.8rem;

    &:hover:not(.active) {
      text-decoration: underline;
    }

    &.active {
      background-color: var(--color-danger);
      transition: 0.5s;
      color: var(--color-light) !important;
      border-radius: 7px;
      border: 1px solid var(--color-danger);

      &.signup {
        background: var(--color-light);
        border: 1px solid currentColor;

        color: var(--color-dark) !important;

        &:hover {
          background: transparent;
          color: var(--color-danger) !important;
        }
      }

      &:hover {
        background: transparent;
        color: var(--color-danger) !important;
      }
    }
  }

  @media screen and (max-width: 961px) {
    &:not(:first-child) {
      margin-top: 15px;
    }

    a {
      color: var(--color-light) !important;
    }
  }
`;

export const ToggleButton = styled.div`
  font-size: 35px;
  color: var(--color-light) !important;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    display: none !important;
  }

  @media screen and (max-width: 630px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 340px) {
    font-size: 2rem;
  }
`;

export const CloseIcon = styled.div`
  font-size: 3rem;
  color: var(--color-light);
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const ContactInfo = styled.div`
  width: 100vw;

  display: ${props => props.hide ? 'none' : 'flex'};
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #ccc;

  padding: 5px 40px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;

    p {
      text-align: center;
    }

    div.contactElement {
      &:not(:first-child){
        margin-top: 15px;
      }
    }
  }

  p {
    font-size: 13px;
    font-weight: 600;
  }

  div.socialMedias {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 50px;
      height: 50px;
      padding: 10px;
      border-radius: 50%;

      background: var(--color-light);

      display: flex;
      justify-content: center;
      align-items: center;

      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      img {
        width: 22px;
      }

      &:not(:first-child) {
        margin-left: 20px;
      }

      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }
  }
`;