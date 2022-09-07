import '../styles/globals.css'
import '../styles/main.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Quiz Conhecimentos Gerais</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
