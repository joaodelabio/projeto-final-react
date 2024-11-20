import './style.css'

export default function ContainerCarrinho() {
    return (
        <div className="carrinho-container">
            <h1>Carrinho</h1>
            <div className="resumo-carrinho">
                <p>Total de itens: <span id="total-itens">1</span></p>
            </div>
            <div className="lista-produtos">
                <div className="produto">
                    <img src="./src/assets/imagens/sabao1.png"/>
                    <div className="detalhes-produto">
                        <h2>Sabão 1</h2>
                        <p>Quantidade: <span>1</span></p>
                        <p>Preço: $ <span>50,00</span></p>
                    </div>
                    <button className="remover-produto">Remover do carirnho</button>
                </div>
            </div>
            <div className="acoes-carrinho">
                <button className="fechar-pedido">Fechar pedido</button>
            </div>
        </div>
    );
}