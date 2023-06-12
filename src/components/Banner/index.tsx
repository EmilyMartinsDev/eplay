import { Image, Titulo, Precos } from './styles'
import banner from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>Marve&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
          <Precos>
            <span>de R$ 250,00 </span>
            <br />
            por Apenas R$ 99,00
          </Precos>
        </div>
        <Button title="clique aqui para aproveitar" type="link" to="/produtos">
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}
export default Banner
