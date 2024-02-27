import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import './filmes.css';
import Erro from "../Erro";

const index = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
        navigate('/', { replace: true });
        return;
      })
    }
    loadFilme();
  }, [navigate, id]);


  const salvarFilme = () => {
    const minhaLista = localStorage.getItem("@primeflix");
    
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

    if(hasFilme) {
      alert("Esse filme já está na lista");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso");
  }

  
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

    	<div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target="blank" rel="external">Trailer</a>
        </button>
      </div>

    </div>
  )
}

export default index