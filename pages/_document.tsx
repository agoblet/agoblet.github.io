import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/Users/axelgoblet/projects/pet/agoblet.github.io/public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/Users/axelgoblet/projects/pet/agoblet.github.io/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Users/axelgoblet/projects/pet/agoblet.github.io/public/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/Users/axelgoblet/projects/pet/agoblet.github.io/public/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="/Users/axelgoblet/projects/pet/agoblet.github.io/public/safari-pinned-tab.svg"
          color="#22b391"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#22b391" />

        <meta property="og:site_name" content="Axel Goblet" />
        <meta property="og:url" content="https://www.axelgoblet.com" />
        <meta
          property="og:description"
          content="Machine learning engineer at Bigdata Republic"
        />
        <meta
          name="description"
          content="Machine learning engineer at Bigdata Republic"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.axelgoblet.com/assets/apple-touch-startup-image-1136x640.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
