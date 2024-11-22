import './style.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <section id="landing-page">
                <div className="conteudo-main">
                    <h1>Sabão macaco, eu sou sabão macaco.</h1>
                    <p>Sabões macaco de última geração.</p>
                    <Link to="/Loja">
                        <button id="seubutao">Quero ver</button>
                    </Link>
                </div>
            </section>
            <section id="contatos">
                <div className="conteudo-contatos">
                    <img src="./src/assets/imagens/macaco-jornal.jpg" alt="CEO sabao macaco"/>
                    <p>Magago lendo jornal</p>
                    <div className="links-contatos">
                        <a href="https://github.com/joaodelabio" target="_blank">
                            Github
                        </a>
                        <a href="https://youtu.be/LVMHYzVS9Y4?si=za714Vanx_XPLZ0m" target="_blank">
                            WhatsApp
                        </a>
                        <a href="https://youtu.be/rB11hfPdtWk?si=EFELlf4pkjTF6XG_" target="_blank">
                            Venom e os aventureiros
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
