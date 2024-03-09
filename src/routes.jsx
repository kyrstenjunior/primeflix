import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Filmes from './pages/Filmes/index';
import Header from './components/Header';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/filmes/:id' element={ <Filmes /> } />
          <Route path='/favoritos' element={ <Favoritos /> } />
          
          <Route path='*' element={ <Erro /> } /> {/* Precisa der o último */}
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
