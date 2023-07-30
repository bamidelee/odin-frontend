import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="google-site-verification" content="ZEpzKURh3jPMIsVKeE7q72OJPBATtmGlYSiazIGhV0s" />
        <meta name="description" content="Naija's latest and trending movies hub"></meta>
        <link rel="icon" href="/static/favicon.png/" type="image/png" sizes="48x48" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
