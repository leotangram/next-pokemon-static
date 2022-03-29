import { FC } from 'react'
import { Grid } from '@nextui-org/react'
import { FavoriteCardPokemon } from '../favorite-card-pokemon/FavoriteCardPokemon'

interface FavoritePokemonsProps {
  pokemons: number[]
}

export const FavoritePokemons: FC<FavoritePokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container direction="row" gap={2} justify="flex-start">
      {pokemons.map(id => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  )
}
