import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="static/css/style.css" />
          <style>{`body { margin: 0 } /* custom! */`}</style>

        </Head>
        <body className="root">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}