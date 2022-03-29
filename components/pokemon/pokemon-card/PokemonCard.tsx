import { Card, Grid, Row, Text } from '@nextui-org/react'
import { FC } from 'react'
import { SmallPokemon } from '../../../interfaces'
import { useRouter } from 'next/router'

interface PokemonCardProps {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<PokemonCardProps> = ({
  pokemon: { id, img, name }
}) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/name/${name}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text transform="capitalize">#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
