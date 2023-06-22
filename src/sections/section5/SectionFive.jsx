import './styles.css';
import imagem from '../../assets/Group 92.png'
export default function SectionFive(){
    return(
        <div className='SectionFive'>
            <img src={imagem} alt="" />
            <div className='infos-4'>
                <h1>A melhor escolha para um novo estilo de vida</h1>
                <p>
                O Sunny Education, foi feito por especialistas na área da saúde(Fonoaudiólogos) e Psicólogos na área educativa.
                </p>
                <button>Saiba mais</button>
            </div>
        </div>
    )
}