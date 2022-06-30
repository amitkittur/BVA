import Document, { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/assets/images/favicon.ico"
        />
      </Head>
      <body>
        <div className="main-wrapper">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
