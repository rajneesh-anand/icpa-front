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
            src="https://www.googletagmanager.com/gtag/js?id=G-F467Z7XFF5"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-F467Z7XFF5',{
                 page_path: window.location.pathname,
                });
              `,
            }}
          />
          <link
            href="https://kit-pro.fontawesome.com/releases/v5.13.0/css/pro.min.css"
            rel="stylesheet"
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
