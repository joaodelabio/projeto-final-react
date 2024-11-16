import './header.css'

export default function Header() {
    return (
        <>
        <header>
            <div className='logo'>
                <h1>Sabão Macaco</h1>
            </div>
            <nav className='header-links'>
                <p className='header-links'>Home</p>
                <p className='header-links'>Produtos</p>
                <p className='header-links'>Carrinho</p>
                <p className='header-links'>Contatos</p>
            </nav>
        </header>
        </>
    )
}