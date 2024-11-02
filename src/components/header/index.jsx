import './header.css'

export default function Header() {
    return (
        <>
        <header>
            <div className='logo'>
                <h1>Galeria Antonho</h1>
            </div>
            <nav className='header-links'>
                <p className='header-links'>Home</p>
                <p className='header-links'>Galeria</p>
                <p className='header-links'>Contatos</p>
            </nav>
        </header>
        </>
    )
}