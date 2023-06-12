import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  .container {
    position: relative;
    padding-top: 340px;
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
  }
  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 450px;
`
export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;
  span {
    text-decoration: line-through;
  }
`
