import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import NotFound from './NotFound'
import Contato from './Contato'
import Header from './Header'
import Login from './Login'
import Produto from './Produto'
import ProdutoAvaliacao from './ProdutoAvaliacao'
import ProdutoCustum from './ProdutoCustum'
import ProdutoDesc from './ProdutoDesc'

const TestRoutes = () => {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Home />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='*' element={<NotFound />}></Route>
              <Route path='produto/:id' element={<Produto />}>
                    <Route path='' element={<ProdutoDesc />} />
                    <Route path='produto-avaliação' element={<ProdutoAvaliacao />} />
                    <Route path='produto-customizado' element={<ProdutoCustum />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default TestRoutes
