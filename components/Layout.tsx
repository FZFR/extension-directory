import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { IBM_Plex_Sans } from 'next/font/google';
import Navbar from './Navbar';

const PlexSans = IBM_Plex_Sans({ weight: "400", subsets: ["latin"] });

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'FOSSBilling Extensions' }: Props) => (
  <div className={ PlexSans.className + " bg-zinc-950" }>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Navbar />
    {children}
  
  </div>
)

export default Layout
