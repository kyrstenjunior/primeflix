import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './home.css';

import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';

const index = () => {
  const [filmesRecentes, setFilmesRecentes] = useState([]);
  const [filmesMelhoresAvaliacoes, setfilmesMelhoresAvaliacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmesRecentes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '5033ca5a8de6e9d6d76f25211d8994d2',
          language: 'pt-BR',
          page: 1
        }
      });

      setFilmesRecentes(response.data.results);
      setLoading(false);
    }
    loadFilmesRecentes();

    async function loadfilmesMelhoresAvaliacoes() {
      const response = await api.get('movie/top_rated', {
        params: {
          api_key: '5033ca5a8de6e9d6d76f25211d8994d2',
          language: 'pt-BR',
          page: 1
        }
      });

      setfilmesMelhoresAvaliacoes(response.data.results);
      setLoading(false);
    }
    loadfilmesMelhoresAvaliacoes();
  }, []);

  if(loading) {
    return(
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  const responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  const filmeTemplate = (filme) => {
    return (
        <div key={filme.id} className="m-2 text-center py-5 px-3">
          <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.name}
                className="w-6 shadow-2"
              />
          </div>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Link to={`/filmes/${filme.id}`}>
              <Button label="Acessar" />
            </Link>
          </div>
        </div>
    );
  };


  return (
    <>
      <div className="container">
        <div className="lista-filmes">
          <div className="recentes">
            <h2>Filmes recentes</h2>
            <Carousel value={filmesRecentes} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={filmeTemplate} />
          </div>
        </div>
      </div>
      <div className="melhores">
        <div className="lista-filmes">
          <h2>Melhores avaliações</h2>
          <Carousel value={filmesMelhoresAvaliacoes} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={filmeTemplate} />
        </div>
      </div>
    </>
  )
}

export default index