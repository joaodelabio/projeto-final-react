import './pesquisa.css';

export default function Pesquisa({ onPesquisaChange }) {
    return (
        <div className='container-pesquisa'>
            <input type="text" placeholder='Pesquisar produto' onChange={(e) => onPesquisaChange(e.target.value)}/>
        </div>
    );
}