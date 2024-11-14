import './card.css';

export default function CardImagens({ src, title, description, onAddCarrinho }) {
    return (
        <>
            <div className="card-imagem">
                <img src={src} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <button onClick={onAddCarrinho}>Adicionar ao Carrinho</button>
            </div>
        </>
    );
}

