import RatingCard from '../../components/rating-card/RatingCard';
import './styles.css';

export default function SectionSix(){
    return(
        <div className='SectionSix'>
            <h1>Avaliações de nossos usuários</h1>
            <div>
                <div className='ratings'>
                    <RatingCard />
                    <RatingCard />
                </div>
            </div>
        </div>
    )
}