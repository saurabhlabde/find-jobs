import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import { client } from "../src/apollo/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
