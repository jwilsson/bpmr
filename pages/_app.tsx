import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>BPMR - Enter a song, get the BPM.</title>
            </Head>

            <Component {...pageProps} />
        </>
    );
};

export default App;
