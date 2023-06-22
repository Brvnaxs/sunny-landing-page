import './styles.css';
import imagem from '../../assets/Group 93.png'
export default function SectionSeven(){
    function message(){
        return(
            alert("Obrigada pelo seu interresse no Sunny, em breve você receberá notícias nossa no seu email :)")
        )
    }
    return(
        <div className='SectionSeven'>
            <img src={imagem} alt="" />
            <div className='news-letter'>
                <p>
                Receba conteúdo exclusivo, dicas, atualizações de nossas redes e novidades do mundo Sunny.
                </p>
                <div className='input'>
                    <input type="text"  placeholder='Seu melhor email (:'/>
                    <button onClick={message}>&gt;</button>
                </div>
            </div>
        </div>
    )
}