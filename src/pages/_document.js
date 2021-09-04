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
          {/* <!-- Primary Meta Tags --> */}
          <meta
            name="description"
            content="Sinapse Concursos leva o estudo preparatório à outro nível, preparamos você para os mais diversos concursos públicos com conteúdos focados em você."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://sinapse.thesimpletech.com.br/"
          />
          <meta property="og:title" content="Sinapse Concursos" />
          <meta
            property="og:description"
            content="Sinapse Concursos leva o estudo preparatório à outro nível, preparamos você para os mais diversos concursos públicos com conteúdos focados em você."
          />
          <meta
            property="og:image"
            content="https://sinapse.thesimpletech.com.br/images/banner.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://sinapse.thesimpletech.com.br/"
          />
          <meta property="twitter:title" content="Sinapse Concursos" />
          <meta
            property="twitter:description"
            content="Sinapse Concursos leva o estudo preparatório à outro nível, preparamos você para os mais diversos concursos públicos com conteúdos focados em você."
          />
          <meta
            property="twitter:image"
            content="https://sinapse.thesimpletech.com.br/images/banner.png"
          ></meta>

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="The Simple TECH" />
          <meta property="article:author" content="The Simple TECH"></meta>

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="194x194"
            href="images/favicon-194x194.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="images/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="images/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff1d45" />
          <meta name="apple-mobile-web-app-title" content="Sinapse Concursos" />
          <meta name="application-name" content="Sinapse Concursos" />
          <meta name="msapplication-TileColor" content="#b91d47" />
          <meta name="msapplication-TileImage" content="images/mstile-144x144.png" />
          <meta name="theme-color" content="#f0f0f0" />

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
