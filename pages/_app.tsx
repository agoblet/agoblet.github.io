import type { AppProps } from "next/app";
import * as React from "react";
import Layout from "../components/Layout";

export default function App({ Component }: AppProps) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}
