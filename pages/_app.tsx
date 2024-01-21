import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
