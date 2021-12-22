import React from "react";
import Head from "next/head";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";

import {
  CenterBox,
  Container,
} from "../../styles/pages/confirmation/email-sended.styles";

export default function EmailSended() {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title> E-mail Enviado - Sinapse </title>
      </Head>

      <CenterBox>
        <div className="f-modal-alert">
          <div className="f-modal-icon f-modal-warning scaleWarning">
            <span className="f-modal-body pulseWarningIns"></span>
            <span className="f-modal-dot pulseWarningIns"></span>
          </div>
        </div>
        <p>
          {" "}
          Agradecemos por ter criado uma conta em nossa plataforma, mas antes de
          tudo confirme o seu e-mail.
        </p>
        <p>
          O e-mail de confirmação já deve estar chegando, caso não apareça na
          Caixa de Entrada pedimos que verifique no Spam.
        </p>
        <br />
        <button onClick={() => router.push("/")}>Voltar para o ínicio</button>
      </CenterBox>
    </Container>
  );
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
};