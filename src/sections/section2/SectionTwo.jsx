import './styles.css';
import telaApp2 from '../../assets/Group 85.png'
import boneco2 from '../../assets/Group 3.png'
export default function SectionTwo() {
    return (
        <div className='SectionTwo'>
            <div className='infos'>
                <h1>Uma boa educação é muita importante</h1>
                <p>
                    É hora de começar uma nova diversão com as crianças.
                    Venha compartilhar e se juntar ao mundo Sunny, com muito aprendizado. Além da possibilidade de acopanhamento do progresso educacional do seu filho.
                </p>
                <button>Saiba mais</button>
            </div>
            <img src={telaApp2}  className="img1" alt="" />
            <img src={boneco2} className='img2' alt="" />
        </div>
    )
}