import React from "react";

import { Container } from './styles';

function SuccessMessage({show}) {
  return (
    <Container show={show}>
      <p>
        <strong>Mensagem Enviada com Sucesso!</strong> Logo entraremos em
        contato com você.
      </p>
    </Container>
  );
}

export default SuccessMessage;
