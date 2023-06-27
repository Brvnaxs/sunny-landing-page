import RatingCard from '../../components/rating-card/RatingCard';
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import './styles.css';

export default function SectionSix(){
    return(
        <div className='SectionSix'>
            <h1>Avaliações de nossos usuários</h1>
            <div>
                <div className='ratings'>
                    <RatingCard  user={user1} name={'Alexandre Novaes'} text={'Nossa experiência com o Sunny Education, foi uma das melhores possíveis. Além de trazer todos os benefícios das questões fonéticas, conseguimos acompanhar todo o progresso junto com a escola.'} location={'Advogado, SP'}/>
                    <RatingCard user={user2} name={'Vanessa Sales'} text={'Como professora, o Sunny agregou muito nas nossas atividades no dia a dia. O aprendizado é constante e muito eficaz.'} location={'Professora, PE'}/>
                </div>
            </div>
        </div>
    )
}