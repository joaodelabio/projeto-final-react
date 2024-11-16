import './style.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <section id='landing-page'>
                <div className='conteudo-main'>
                    <h1>Sabão macaco, uma loja de sabão macaco.</h1>
                    <p>Sabões macaco de última geração.</p>
                    <Link to="/grid-loja">
                        <button id='seubutao'>Quero ver</button>
                    </Link>
                </div>
            </section>
        </>
    );
}