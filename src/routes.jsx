import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Filmes from './pages/Filmes/index';
import Header from './components/Header';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/filmes/:id' element={ <Filmes /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
