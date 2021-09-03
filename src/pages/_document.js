import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-194908872-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'UA-194908872-1');
        `,
            }}
          /> */}

          {/* Primary Meta Tags */}
          <meta name="language" content="pt" />
          <meta name="description" content="Sinapse Concursos." />
          <meta name="robots" content="all" />
          <meta
            name="keywords"
            content="concurso cursos pf policia federal curso preparatorio"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://sinapse.thesimpletech.com.br"
          />
          <meta property="og:title" content="Sinapse Concursos" />
          <meta
            property="og:description"
            content="The Simple é uma empresa para quem busca rápidas soluções de informática. Trabalhamos com reparo de computadores, criação de sites, aulas particulares e +."
          />
          <meta
            property="og:image"
            content="https://sinapse.thesimpletech.com.br/images/banner.png"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://sinapse.thesimpletech.com.br"
          />
          <meta property="twitter:title" content="Sinapse Concursos" />
          <meta
            property="twitter:description"
            content="The Simple é uma empresa para quem busca rápidas soluções de informática. Trabalhamos com reparo de computadores, criação de sites, aulas particulares e +."
          />
          <meta
            property="twitter:image"
            content="https://sinapse.thesimpletech.com.br/images/banner.png"
          />

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="The Simple TECH" />
          <meta property="article:author" content="The Simple TECH"></meta>

          <meta name="theme-color" content="#f2f2f2" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="194x194"
            href="/images/favicon-194x194.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/images/safari-pinned-tab.svg"
            color="#2e2e2e"
          />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#2e2e2e" />
          <meta
            name="msapplication-TileImage"
            content="/images/mstile-144x144.png"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,400;1,700&family=Roboto:ital,wght@0,300;0,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
          />

          <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
