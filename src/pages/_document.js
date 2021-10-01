import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" type="image/png" href="/images/favicon.png" />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-KXQY7M7CQL"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-KXQY7M7CQL',{
                 page_path: window.location.pathname,
                });
              `,
            }}
          />

          <link
            rel="stylesheet"
            href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          />

          <script
            type="text/javascript"
            src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
