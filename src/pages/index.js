import React from "react";
import Head from "next/head";
// import Navbar from "../components/Navbar";

import { Container } from "../styles/pages/home.styles";

import SinapseLogo from '../assets/images/sinapseLogo.png';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Sinapse Concursos</title>
      </Head>
      {/* <Navbar /> */}

      <h1>
        <strong>Em breve uma nova maneira de aprender! </strong>
      </h1>
      <br/>
      <hr/>
      <br/>
      <p>
        {" "}
        Conheca a Sinapse Concursos, inicie uma nova jornada no aprendizado e
        passe naquele tão sonhado concurso.
      </p>
    </Container>
  );
}
