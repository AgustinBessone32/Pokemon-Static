import Head from "next/head"
import { FC } from "react"
import { NavBar } from '../ui';

interface Props {
  title? : string
}

export const Layout: FC<Props> = ({children , title}) => {
  return (
    <>
        <Head>
            <title> {title || 'Pokemon App'}</title>
            <meta name='author' content='Agustin Bessone'/>
            <meta name='description' content='Informacion de pokemon xxxx'/>
            <meta name='keywords' content='XXXX, pokemon, pokedex' />
        </Head>

        <NavBar />

        <main style={{
          padding: '0px 20px'
        }}>
            
            {children}

        </main>

    </>
  )
}
