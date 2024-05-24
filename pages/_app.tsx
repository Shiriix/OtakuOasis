import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Modal from "../components/Modal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Modal actionLabel="Submit" isOpen title="Sign Up" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
