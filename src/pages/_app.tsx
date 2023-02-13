import '@blog/styles/globals.css';
import { Inter } from '@next/font/google';
import 'highlight.js/styles/stackoverflow-dark.css';
import type { AppProps } from 'next/app';

import Layout from '@blog/presentation/components/shared/templates/Layout';
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect, useState } from 'react';
hljs.registerLanguage('javascript', javascript);

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${inter.style.fontFamily};
                }
            `}</style>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}
