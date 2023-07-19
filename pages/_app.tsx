import React from "react";
import { AppProps } from "next/app";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="main-wrapper min-h-screen">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
