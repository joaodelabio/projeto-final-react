import './loja.css';
import CardImagens from '../card-imagens';
import Pesquisa from '../pesquisa';
import Alerta from '../alerta';
import { useState } from 'react';

export default function GridLoja() {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [carrinho, setCarrinho] = useState([]);
    const [alerta, setAlerta] = useState(null);

    const handlePesquisaChange = (termo) => {
        setTermoPesquisa(termo.toLowerCase());
    };

    const produtos = [
        { id: 1, src: './src/assets/imagens/sabao1.png', title: "Sabão 1", description: "$ 50,00" },
        { id: 2, src: './src/assets/imagens/sabao2.png', title: "Sabão 2", description: "$ 10.000,00" },
        { id: 3, src: './src/assets/imagens/sabao3.png', title: "Sabão 3", description: "$ 750,00" },
        { id: 4, src: './src/assets/imagens/sabao4.png', title: "Sabão 4", description: "$ 69,69" },
        { id: 5, src: './src/assets/imagens/sabao5.png', title: "Sabão 5", description: "$ 10,00" },
        { id: 6, src: './src/assets/imagens/sabao6.png', title: "Sabão 6", description: "$ 0,00" },
    ];

    const produtosFiltrados = produtos.filter((produto) =>
        produto.title.toLowerCase().includes(termoPesquisa) // || produto.description.toLowerCase().includes(termoPesquisa)
    );

    const addCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
        setAlerta(`${produto.title} adicionado ao carrinho`);
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
            {alerta && <Alerta mensagem={alerta} onClose={() => setAlerta(null)} />}
        </section>
    );
}