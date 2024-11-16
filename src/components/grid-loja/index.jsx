import './loja.css';
import CardImagens from '../card-imagens';
import Pesquisa from '../pesquisa';
import { useState } from 'react';

export default function GridLoja() {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [carrinho, setCarrinho] = useState([]);

    const handlePesquisaChange = (termo) => {
        setTermoPesquisa(termo.toLowerCase());
    };

    const produtos = [
        { id: 1, src: './src/assets/imagens/sabao1.png', title: "teste1", description: "texto texto texto" },
        { id: 2, src: './src/assets/imagens/sabao2.png', title: "teste2", description: "texto texto texto" },
        { id: 3, src: './src/assets/imagens/sabao3.png', title: "teste3", description: "texto texto texto" },
        { id: 4, src: './src/assets/imagens/sabao4.png', title: "teste4", description: "texto texto texto" },
        { id: 5, src: './src/assets/imagens/sabao5.png', title: "teste5", description: "texto texto texto" },
        { id: 6, src: './src/assets/imagens/sabao6.png', title: "teste6", description: "texto texto texto" },
    ];

    const produtosFiltrados = produtos.filter((produto) =>
        produto.title.toLowerCase().includes(termoPesquisa) ||
        produto.description.toLowerCase().includes(termoPesquisa)
    );

    const addCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
        alert(`"${produto.title}" adicionado ao carrinho.`);
    };

    return (
        <section className='grid-loja'>
            <Pesquisa onPesquisaChange={handlePesquisaChange} />
            <div className='container-imagens'>
                {produtosFiltrados.map((produto) => (
                    <CardImagens
                        key={produto.id}
                        src={produto.src}
                        title={produto.title}
                        description={produto.description}
                        onAddCarrinho={() => addCarrinho(produto)}
                    />
                ))}
            </div>
        </section>
    );
}