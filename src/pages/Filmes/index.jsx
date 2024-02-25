import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import './filmes.css';

const index = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '5033ca5a8de6e9d6d76f25211d8994d2',
          language: 'pt-BR'
        }
      }).then((response) => {
        setFilme(response.data);
        setLoading(false);
      }).catch(() => {
        console.log('Filme não encontrado!');
      })
    }
    loadFilme();
  }, []);

  
  if(loading) {
    return (
      <div className="loading">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <small>Data de lançamento: {filme.release_date}</small>
      <h3>Sinopse:</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average}/10</strong>
    </div>
  )
}

export default index