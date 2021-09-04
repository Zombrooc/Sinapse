import React from "react";

import { Container } from './styles';

function SuccessMessage({show}) {
  return (
    <Container show={show}>
      <p>
        <strong>Mensagem Enviada com Sucesso!</strong> Logo entraremos em
        contato com você.
      </p>
      <p> Você será redirecionado para outra página em instantes.</p>
    </Container>
  );
}

export default SuccessMessage;
