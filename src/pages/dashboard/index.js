import React from "react";
import Head from "next/head";
import Link from "next/link";
import { SWRConfig } from "swr";
import { useSession, getSession, signIn } from "next-auth/client";
import { useRouter } from "next/router";

import policeCareer from "../../assets/images/policeCareer.jpeg";

import { useFetch } from "../../config/api";

import {
  CenterBox,
  Container,
} from "../../styles/pages/dashboard/index.styles";

export default function Dashboard({ fallback }) {
  const router = useRouter();
  const [session, loading] = useSession();

  const { data } = useFetch("courses");

  if (!data) {
    return <p>Carregando...</p>;
  }

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
              {data.map((course) => {
                return <p> {course.title}</p>;
              })}
            </p>
            <br />
            <button onClick={() => router.push("/")}>
              Voltar para o ínicio
            </button>
          </CenterBox>
        </Container>
    );
  } else {
    return signIn();
  }
}
