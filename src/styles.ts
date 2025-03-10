import { createGlobalStyle } from 'styled-components'
export const cores = {
  branco: '#eee',
  preto: '#111',
  verde: '#10ac84',
  cinza: '#333',
  cinzaClaro: '#a3a3a3'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
}

body{
  background-color: ${cores.preto};
  color: ${cores.branco};
  padding-top: 40px;
}

.container{
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
}
`
