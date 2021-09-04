import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const ApresentationNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MenuItem = styled.a`
  width: 240px;
  height: 100%;
  border-radius: 0 0 20px 20px;
  background: var(--color-light);

  font-size: 17px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s;

  position: relative;

  .collapse {
    width: 100%;
    height: 100%;
    transition: all .5s;
    background: var(--color-light);
  
  }
`;

export const FirstBlock = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 35px;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


`;
