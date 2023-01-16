import { AppProps} from 'next/app';
import '../../styles/globals.scss'
import { Header } from '../components/Header';
import {SessionProvider} from 'next-auth/react'
import { Session } from "next-auth";


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
