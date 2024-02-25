import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './home.css';

const index = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '5033ca5a8de6e9d6d76f25211d8994d2',
          language: 'pt-BR',
          page: 1
        }
      });

      setFilmes(response.data.results);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if(loading) {
    return(
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }


  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filmes/${filme.id}`} >Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default index