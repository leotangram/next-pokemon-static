import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../../ui'

interface LayoutProps {
  title?: string
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="author" content="Leonardo Omaña" />
        <meta
          name="description"
          content={`Información sober el pokémon: ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre: ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0 20px'
        }}
      >
        {children}
      </main>
    </>
  )
}
