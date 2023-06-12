class Game {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  system: string
  id: number

  constructor(
    id: number,
    title: string,
    category: string,
    description: string,
    infos: string[],
    image: string,
    system: string
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.description = description
    this.infos = infos
    this.system = system
    this.image = image
  }
}
export default Game
