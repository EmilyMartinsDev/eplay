import Game from '../../models/Game'
import Product from '../Product'
import { Container, List, Title } from './styles'
export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ background, title, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((g) => (
            <Product
              key={g.id}
              category={g.category}
              description={g.description}
              image={g.image}
              infos={g.infos}
              system={g.system}
              title={g.title}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
