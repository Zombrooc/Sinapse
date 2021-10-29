import React from "react";
import Head from "next/head";
import Link from "next/link";

import meme from './meme.png';

export default function Pranck() {
  return (
    <>
      <Head>
        <title> Gabarito Simulado - Informática </title>
      </Head>

      <div
        className="container"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1> Você não achou que aqui teria mesmo as respostas neh? </h1>

        <img src={meme} />
        <img src="https://www.meme-arsenal.com/memes/1516594d28c312f8e8a266156db330b4.jpg"/>

      </div>
    </>
  );
}
