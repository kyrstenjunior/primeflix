import './footer.css';

const Footer = () => {
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();

  return (
    <footer>
        <p>Primeflix {anoAtual}</p>
    </footer>
  )
}

export default Footer