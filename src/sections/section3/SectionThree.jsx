import './styles.css';
import tela3 from '../../assets/Group 88.png'
export default function SectionThree(){
    return(
        <div className='SectionThree'>
            <img src={tela3} alt="" />
            <div className='infos-3'>
                <h1>Ajude seu filho em seu desenvolvimento e habilidades</h1>
                <p>
                Com o nosso jogo de palavras, o desenvolvimento fonético e de lógica auxilia ainda mais no processo cognitivo de seu filho.
                </p>
                <button>Saiba mais</button>
            </div>
        </div>
    )
}