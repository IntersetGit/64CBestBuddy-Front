import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="th">
                <Head>
                    <link rel="icon" type="image/png" href="/images/favicon.png"></link>
                    <script src="https://smtpjs.com/v3/smtp.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;