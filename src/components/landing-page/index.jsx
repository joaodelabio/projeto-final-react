import './style.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <section id="landing-page">
                <div className="conteudo-main">
                    <h1>Sabão macaco, uma loja de sabão macaco.</h1>
                    <p>Sabões macaco de última geração.</p>
                    <Link to="/Loja">
                        <button id="seubutao">Quero ver</button>
                    </Link>
                </div>
            </section>
            <section id="contatos">
                <div className="conteudo-contatos">
                    <img src="./src/assets/imagens/macaco-jornal.jpg" alt="CEO sabao macaco"/>
                    <p>TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO</p>
                    <div className="links-contatos">
                        <a href="https://youtu.be/LVMHYzVS9Y4?si=za714Vanx_XPLZ0m" target="_blank">
                            chama no zap
                        </a>
                        <a href="https://youtu.be/rB11hfPdtWk?si=EFELlf4pkjTF6XG_" target="_blank">
                            chama no insta
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
