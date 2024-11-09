import './galeria.css';
import CardImagens from '../card-imagens';
import Pesquisa from '../pesquisa';
import { useState } from 'react';

export default function GridGaleria() {
    const [termoPesquisa, setTermoPesquisa] = useState(''); //aqui termoPesquisa armazena o termo de pesquisa
                                                            //digitado pelo usuário
    const handlePesquisaChange = (termo) => {
        setTermoPesquisa(termo.toLowerCase()); //o termo digitado vai ser convertido para letras minúsculas
    };                                         //pra que a pesquisa aceite qualquer bosta e nao dê xabu

    const imagens = [
        { src: './src/assets/imagens/Untitled.webp', title: "teste 1", description: "texto texto texto" },
        { src: './src/assets/imagens/Untitled.webp', title: "teste 2", description: "texto texto texto" },
        { src: './src/assets/imagens/Untitled.webp', title: "teste 3", description: "texto texto texto" },
        { src: './src/assets/imagens/Untitled.webp', title: "teste 4", description: "texto texto texto" },
        { src: './src/assets/imagens/Untitled.webp', title: "teste 5", description: "texto texto texto" },
        { src: './src/assets/imagens/Untitled.webp', title: "teste 6", description: "texto texto texto" },
        { src: './src/assets/imagens/Untitled.webp', title: "teste 7", description: "texto texto texto" },
        { src: './src/assets/imagens/Untitled.webp', title: "teste 8", description: "texto texto texto" },
        { src: './src/assets/imagens/Untitled.webp', title: "teste 9", description: "texto texto texto" },
        { src: './src/assets/imagens/Untitled.webp', title: "teste 10", description: "texto texto texto" },
    ];
    /*
    aqui as imagens vao ser filtradas com base no termo de pesquisa. após o usuário digitar algum termo, será verificado se
    o título e a descrição da imagem contém o termo digitado
    */
    const imagensFiltradas = imagens.filter(imagem => 
        imagem.title.toLowerCase().includes(termoPesquisa) || imagem.description.toLowerCase().includes(termoPesquisa)
    );

    return (
        <section className='grid-galeria'>
            <Pesquisa onPesquisaChange={handlePesquisaChange} />
            <div className='container-imagens'>

                {/*mapa com as imagens filtradas, que vai renderizar um card pra cada uma*/}
                {imagensFiltradas.map((imagem, index) => (
                    <CardImagens 
                        key={index} // prop para gerenciar os componentes a partir do indice dentro do array,  
                                    // nao faz parte do filtro de busca
                        src={imagem.src} // prop com o caminho da imagem
                        title={imagem.title}
                        description={imagem.description}
                    />
                ))}
            </div>
        </section>
    );
}
