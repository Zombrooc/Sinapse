import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useSession, signIn } from "next-auth/client";

import { useFetch } from "../../config/api";

import Navbar from "../../components/Navbar";
import Loading from '../../components/Loading';

import {
  Container,
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
        <Container>
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
        </Container>
      </>
    );
  } else {
    return signIn();
  }
}
