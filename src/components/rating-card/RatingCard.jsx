import './styles.css';
import user from '../../assets/ratingcard.png'
import { AiFillStar } from 'react-icons/ai'
export default function RatingCard() {
    return (
        <div className='RatingCard'>
            <img src={user} alt="" />
            <p>
                Nossa experiência com o Sunny Education, foi uma das melhores possíveis.
                Além de trazer todos os benefícios das questões fonéticas, conseguimos acompanhar todo o progresso junto com a escola.
            </p>
            <h2>Alexandre Novaes</h2>
            <div className='stars-box'>
                <h3>Advogado, SP</h3>
                <div className='stars'>
                    <AiFillStar />
                    <h5>4.5</h5>
                </div>
            </div>
        </div>
    )
}