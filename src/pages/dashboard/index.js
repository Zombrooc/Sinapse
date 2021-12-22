import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useSession, signIn } from "next-auth/client";

import { useFetch } from "../../config/api";

import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";

import {
  Container,
  Card,
  CardTitle,
  CardBody,
  CardButton,
} from "../../styles/pages/dashboard/index.styles";

export default function Dashboard() {
  const [session, loading] = useSession();

  const { data } = useFetch("courses");

  if (!data) {
    return <Loading show={true} />;
  }

  if (typeof window !== "undefined" && loading) return null;

  if (session) {
    return (
      <>
        <Head>
          <title> Sinapse Dashboard </title>
        </Head>
        <Navbar hideContactInfo />
        {/* <Container>
          {data.map((course) => {
            return (
              <Link href={`/dashboard/course/${course.id}`}>
                <a>
                  <div className="block" key={course.id}>
                    {course.title}
                  </div>
                </a>
              </Link>
            );
          })}
        </Container> */}
        <Container>
          <div className="grid">
            {data.map((course) => {
              return (
                <Card key={course.id}>
                  <img src={`${course.cover.url}`} />
                  <CardTitle> {course.title} </CardTitle>
                  {course.description ? (
                    <CardBody>
                      <p style={{ marginTop: "8px" }}>{course.description}</p>
                    </CardBody>
                  ) : null}
                  <Link href={`/dashboard/course/${course.id}`}>
                    <a>
                      <CardButton>Acessar curso</CardButton>
                    </a>
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </>
    );
  } else {
    return signIn();
  }
}