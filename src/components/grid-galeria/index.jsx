import './galeria.css';
import CardImagens from '../card-imagens';

export default function GridGaleria() {
    return (
        <section className='grid-galeria'>
            <div className='container-busca'>
                <input type="text" placeholder='Procurar por imagem' />
            </div>
            <div className='container-imagens'>
                <CardImagens 
                    src='./src/assets/imagens/Untitled.webp'
                    title="teste 1" 
                    description="texto texto texto" 
                />
                <CardImagens 
                    src='./src/assets/imagens/Untitled.webp'
                    title="teste 2" 
                    description="texto texto texto" 
                />
                <CardImagens 
                    src='./src/assets/imagens/Untitled.webp' 
                    title="teste 3" 
                    description="texto texto texto" 
                />
                <CardImagens 
                    src='./src/assets/imagens/Untitled.webp' 
                    title="teste 4" 
                    description="texto texto texto" 
                />
                <CardImagens 
                    src='./src/assets/imagens/Untitled.webp' 
                    title="teste 5" 
                    description="texto texto texto" 
                />
                <CardImagens 
                    src='./src/assets/imagens/Untitled.webp' 
                    title="teste 6" 
                    description="texto texto texto" 
                />
                <CardImagens 
                    src='./src/assets/imagens/Untitled.webp' 
                    title="teste 7" 
                    description="texto texto texto" 
                />
                <CardImagens 
                    src='./src/assets/imagens/Untitled.webp' 
                    title="teste 8" 
                    description="texto texto texto" 
                />
                <CardImagens 
                    src='./src/assets/imagens/Untitled.webp' 
                    title="teste 9" 
                    description="texto texto texto" 
                />
                <CardImagens 
                    src='./src/assets/imagens/Untitled.webp' 
                    title="teste 10" 
                    description="texto texto texto" 
                />
            </div>
        </section>
    );
}
