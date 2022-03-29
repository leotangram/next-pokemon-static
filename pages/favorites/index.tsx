import { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { FavoritePokemons, NoFavorites } from '../../components/pokemon'
import { localFavorites } from '../../utils'

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title="Pokémons favoritos">
      {favoritePokemons.length ? (
        <FavoritePokemons pokemons={favoritePokemons} />
      ) : (
        <NoFavorites />
      )}
    </Layout>
  )
}

export default FavoritesPage
