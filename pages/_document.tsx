import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#22b391" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#22b391" />

        <meta property="og:site_name" content="Axel Goblet" />
        <meta property="og:url" content="https://www.axelgoblet.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.axelgoblet.com/opengraph.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
