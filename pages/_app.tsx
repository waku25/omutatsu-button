import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/back_ground.scss';
import React from 'react';

export default function MyApp({ Component, pageProps } : AppProps) {
    return <Component {...pageProps} />
}
