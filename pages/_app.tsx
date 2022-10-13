import type { AppProps } from "next/app";
import * as React from "react";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});

function App({ Component }: AppProps) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}
