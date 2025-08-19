import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link 
          rel="icon" 
          href="/favicon.ico" 
          type="image/x-icon" 
          sizes="32x32"
        />
        <style jsx global>{`
          /* Aplicar bordes redondeados al favicon */
          link[rel="icon"] {
            border-radius: 50%;
          }
          /* Para navegadores que no soportan border-radius en el favicon */
          .favicon-rounded {
            border-radius: 50%;
            overflow: hidden;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
