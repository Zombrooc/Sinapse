import React from "react";
import Head from "next/head";
import { Provider } from "next-auth/client";

import GlobalStyles from "../styles/GlobalStyles";
import "../styles/externalImports.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider
      session={pageProps.session}
      options={{
        clientMaxAge: 60, // Re-fetch session if cache is older than 60 seconds
        keepAlive: 5 * 60, // Send keepAlive message every 5 minutes
      }}
    >
      <Head>
        <meta name="title" content="Sinapse Concursos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </Provider>
  );
}

export default MyApp;
