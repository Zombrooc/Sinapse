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
    return signIn();
  }
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
