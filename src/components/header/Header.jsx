import './styles.css';
import logo from '../../assets/logo.png'
export default function Header() {
    return (
        <div className='Header'>
            <img className='header-img' src={logo} alt="Logo Sunny ED" />
            <h3>Sobre a gente</h3>
            <h3>Compainha</h3>
            <h3>Valores</h3>
            <h3>Parcerias</h3>
            <h3>Contato</h3>
            <button className='header-entrar'>Entrar</button>
        </div>
    )
}