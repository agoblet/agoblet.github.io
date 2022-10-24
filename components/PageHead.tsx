import * as React from "react";
import Head from "next/head";

type PageProps = {
  title: string;
  description: string;
};

export default function PageHead({ title, description }: PageProps) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
    </Head>
  );
}
