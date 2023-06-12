import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
import residentImg from '../../assets/images/resident.png'
import diablo from '../../assets/images/resident.png'
import zeuda from '../../assets/images/resident.png'
import starors from '../../assets/images/resident.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil',
    category: 'Ação',
    description: 'Jogo muito legal',
    image: residentImg,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows, MacOs'
  },
  {
    id: 2,
    title: 'Diablo',
    category: 'Ação',
    description: 'Jogo muito legal',
    image: diablo,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows, MacOs'
  },
  {
    id: 3,
    title: 'Star Ors',
    category: 'Ação',
    description: 'Jogo muito legal',
    image: starors,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows, MacOs'
  },
  {
    id: 4,
    title: 'Zeuda',
    category: 'Ação',
    description: 'Jogo muito legal',
    image: zeuda,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows, MacOs'
  }
]
const emBreve: Game[] = [
  {
    id: 5,
    title: 'Zeuda',
    category: 'Ação',
    description: 'JOGO LEGAL',
    image: zeuda,
    infos: ['17/05'],
    system: 'Windows, MacOs'
  },
  {
    id: 6,
    title: 'Zeuda',
    category: 'Ação',
    description: 'JOGO LEGAL',
    image: residentImg,
    infos: ['17/05'],
    system: 'Windows, MacOs'
  },
  {
    id: 7,
    title: 'Zeuda',
    category: 'Ação',
    description: 'JOGO LEGAL',
    image: starors,
    infos: ['17/05'],
    system: 'Windows, MacOs'
  }
]
const Home = () => {
  return (
    <>
      <Banner />
      <ProductList games={promocoes} title="promoçoes" background="gray" />
      <ProductList games={emBreve} title="Em breve" background="black" />
    </>
  )
}
export default Home
