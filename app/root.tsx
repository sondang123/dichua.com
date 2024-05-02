import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import type { LinksFunction } from '@remix-run/cloudflare'
import tailwind from './tailwind.css?url'

import 'remixicon/fonts/remixicon.css'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Toaster } from '~/components/ui/toaster'
export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwind },

    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Krona+One&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: 'favicon.png',
    },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-PlusJakarta">
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        {/* <script
          type="module"
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0"
          nonce="HieVifsA"
          async
          defer
          crossOrigin="anonymous"
        ></script> */}
        {/* <div id="fb-root"></div> */}
        <Scripts /> <Toaster />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
