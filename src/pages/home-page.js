import React from "react";
import Head from "next/head";
// import Navbar from "../components/Navbar";

import { Container, FirstBlock } from "../styles/pages/home.styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Sinapse Concursos</title>
      </Head>
      <Navbar />

      <FirstBlock>

      </FirstBlock>

      
    </Container>
  );
}
