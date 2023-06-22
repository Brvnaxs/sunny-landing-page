import './styles.css';

export default function Card({number, title, text}) {
    return (
        <div className='Card'>
            <div className='number'>{number}</div>
            <h3>{title}</h3>
            <p>
                {text}
            </p>
            <span>Saiba mais &gt;&gt;</span>
        </div>
    )
}