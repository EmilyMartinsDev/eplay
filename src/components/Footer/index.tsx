import { Container, SectionTitle, Link, Links, FooterSection } from './styles'
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <Container>
        <div className="container">
          <FooterSection>
            <SectionTitle>Categorias</SectionTitle>
            <Links>
              <li>
                <Link href="#">RPG</Link>
              </li>
              <li>
                <Link href="#">Ação</Link>
              </li>
              <li>
                <Link href="#">Aventura</Link>
              </li>
              <li>
                <Link href="#">Esportes</Link>
              </li>
              <li>
                <Link href="#">Simulaçao</Link>
              </li>
              <li>
                <Link href="#">Estratégia</Link>
              </li>
              <li>
                <Link href="#">FPS</Link>
              </li>
            </Links>
          </FooterSection>
          <FooterSection>
            <SectionTitle>Acesso Rápido</SectionTitle>
            <Links>
              <li>
                <Link href="#">Novidades</Link>
              </li>
              <li>
                <Link href="#">Promoções</Link>
              </li>
              <li>
                <Link href="#">Em Breve</Link>
              </li>
            </Links>
          </FooterSection>
          <p>{currentYear} &copy; EPLAY todos os direitos reservados</p>
        </div>
      </Container>
    </>
  )
}
export default Footer
