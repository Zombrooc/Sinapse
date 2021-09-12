import React from "react";
import Head from "next/head";
import { useSession, getSession, signIn } from "next-auth/client";
import { useRouter } from "next/router";

import policeCareer from '../../assets/images/policeCareer.jpeg';

import {
  CenterBox,
  Container,
} from "../../styles/pages/dashboard/index.styles";

export default function Dashboard() {
  const router = useRouter();
  const [session, loading] = useSession();

  if (typeof window !== "undefined" && loading) return null;

  if (session) {
    return (
      <Container style={{ backgroundImage: `url(${policeCareer})` }}>
        <Head>
          <title> Sinapse Dashboard </title>
        </Head>

        <CenterBox>
          
          <p>
            {" "}
            Bem-vindo a sua Dashboard!! :)
          </p>
          <br />
          <button onClick={() => router.push("/")}>Voltar para o ínicio</button>
        </CenterBox>
      </Container>
    );
  } else {
    return (
      <Container>
        <Head>
          <title> Sinapse Dashboard </title>
        </Head>

        <CenterBox>
          <div className="f-modal-alert">
            <div className="f-modal-icon f-modal-warning scaleWarning">
              <span className="f-modal-body pulseWarningIns"></span>
              <span className="f-modal-dot pulseWarningIns"></span>
            </div>
          </div>
          <p>Efetue Login para poder acessar essa página.</p>
          <br />
          <button onClick={() => signIn()}>Entrar</button>
        </CenterBox>
      </Container>
    );
  }
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
