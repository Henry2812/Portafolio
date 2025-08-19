import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          /* Asegurar que el favicon se vea redondeado */
          link[rel="icon"] {
            border-radius: 50% !important;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
