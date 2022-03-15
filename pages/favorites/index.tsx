import { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import {FavoritesPokemons} from '../../components/pokemon'
import { NoFavorites } from '../../components/ui/index'
import { localFavorites } from '../../utils'

const FavoritePage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons)
    }, [])

    return (
        <Layout title='Tus pokémons favoritos'>

            {
                favoritePokemons.length === 0
                    ? (<NoFavorites />)
                    : (
                      <FavoritesPokemons pokemons={favoritePokemons}/>

                    )
            }



        </Layout>
    )
}

export default FavoritePage