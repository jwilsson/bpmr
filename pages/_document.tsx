import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="Enter a song, get the BPM." />
                </Head>

                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
