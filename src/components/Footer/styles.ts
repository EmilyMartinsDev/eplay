import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`
export const SectionTitle = styled.h4`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branco};
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
