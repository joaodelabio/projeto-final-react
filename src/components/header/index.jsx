import './header.css';

export default function Header() {
    return (
        <header>
            <div className="logo">
                <a href="/" className='titulo'>Sabão Macaco</a>
            </div>
            <nav className="header-links">
                <a href="/Loja" className="header-link">Produtos</a>
                <a href="/Carrinho" className='header-link'>Carrinho</a>
                <a href="/#contatos" className="header-link">Contatos</a>
            </nav>
        </header>
    );
}