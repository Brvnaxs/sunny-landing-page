import './styles.css';
import telaApp from '../../assets/ASSETS 02.png'
import boneco from '../../assets/ASSETS 01.png'
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa'
import Header from '../../components/header/Header';
export default function Home() {
    return (
        <div className='home-container'>
            <Header />
        <div className='Home'>
            <img src={telaApp} className='tela-app' alt="Tela App Sunny Education" />
            <img src={boneco} className='boneco' alt="Personagem do jogo Sunny Education" />
            <div className='infos'>
                <h1>Aprender facilmente com diversão</h1>
                <p>É hora de começar uma nova diversão com as crianças.
                    Venha compartilhar e se juntar ao mundo Sunny.</p>
                    <div className='buttons'>
                <button>
                    <FaGooglePlay className='icon-home'/>
                    DOWNLOAD FROM GOOGLE PLAY
                </button>
                <button>
                    <FaAppStoreIos className='icon'/>
                    DOWNLOAD FROM APPLE STORE
                </button>
                </div>
            </div>
        </div>
        </div>
    )
}
