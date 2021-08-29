import styled from 'styled-components';

export const Container = styled.div`
  max-width: 330px;
  width: 100%;
  padding: 20px;
  background: var(--color-success);

  color: var(--color-light);

  position: absolute;
  top: 70px;
  right: 15px;
  border-radius: 15px;
  display: ${props => props.show ? 'block' : 'none'};
`;
