import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='d-flex align-items-center'>
      <div className="container d-flex align-items-center justify-content-between">
        <Link className='logo' to='/'><span>Prime</span>flix</Link>
        <Link className='favoritos' to='/favoritos'>Meus filmes</Link>
      </div>
    </header>
  )
}

export default Header