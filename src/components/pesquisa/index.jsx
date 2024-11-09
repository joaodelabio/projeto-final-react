import './pesquisa.css';

export default function Pesquisa({ onPesquisaChange }) {
    return (
        <div className='container-pesquisa'>
            <input type="text" placeholder='Procurar por imagem' onChange={(e) => onPesquisaChange(e.target.value)}/>
        </div>
    );
}