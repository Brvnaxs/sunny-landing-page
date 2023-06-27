import './styles.css';
import { AiFillStar } from 'react-icons/ai'
export default function RatingCard({user, text, name, location}) {
    return (
        <div className='RatingCard'>
            <img src={user} alt="" />
            <p>
               {text}
            </p>
            <h2>{name}</h2>
            <div className='stars-box'>
                <h3>{location}</h3>
                <div className='stars'>
                    <AiFillStar />
                    <h5>4.5</h5>
                </div>
            </div>
        </div>
    )
}