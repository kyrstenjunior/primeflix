import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';

const Favoritos = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    const removeFilme = (id) => {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id);
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    }

  return (
    <div className='meus-filmes'>
        <h1>Meus filmes</h1>

        { filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span> }

        <ul>
            {filmes.map((filme) => {
                return (
                    <li key={filme.id}>
                        <span>{filme.title}</span>
                        <div>
                            <Link to={`/filmes/${filme.id}`}>Ver detalhes</Link>
                            <button onClick={ () => removeFilme(filme.id) }>Excluir</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Favoritos