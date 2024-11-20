import './card.css';

export default function CardImagens({ src, title, description, onAddCarrinho }) {
    if (!src || !title || !description) {
        return null; // NAO TEM MAIS BOTAO EXTRA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    return (
        <div className="card-imagem">
            <img src={src} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={onAddCarrinho}>Adicionar ao carrinho</button>
        </div>
    );
}
