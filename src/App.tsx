import Footer from './components/Footer'
import Header from './components/Header'
import Rotas from './routes'
import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
