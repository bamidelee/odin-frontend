import '../styles/globals.css'
import {useRef} from 'react'
import Layout from '../components/layout'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client = {client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

