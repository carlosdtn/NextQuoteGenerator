import '../styles/globals.css'
import Head from 'next/head'
import Footer from 'components/Layouts/Footer'
import UpperSection from 'components/Layouts/UpperSection'
import { ReloadContextProvider } from 'context/reloadContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quote App</title>
        <meta name="description" content="Quote Generator por Carlos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReloadContextProvider>
        <UpperSection>
          <Component {...pageProps} />
          <Footer />
        </UpperSection>
      </ReloadContextProvider>
    </>
  )
}

export default MyApp
