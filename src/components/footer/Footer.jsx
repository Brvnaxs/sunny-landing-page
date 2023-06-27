import './styles.css';
import logo from '../../assets/Group 96.png'
import { TfiEmail } from 'react-icons/tfi'
import { HiOutlinePhone } from 'react-icons/hi'
import { GrLocation } from 'react-icons/gr'
import { SlSocialGoogle, SlSocialTwitter, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl'
export default function Footer() {
    return (
        <div className='Footer'>
            <div className='section-one'>
                <div className='list'>
                    <img  className="list-img" src={logo} alt="" />
                    <ul >
                        <li><TfiEmail className='icon-footer'/>  educa.sunny@gmail.com</li>
                        <li><HiOutlinePhone className='icon-footer'/>  +55 81 9 8817-3072</li>
                    </ul>
                </div>
                <div className='list'>
                    <h2>Início</h2>
                    <ul>
                        <li>Acessibilidade</li>
                        <li>Certificados</li>
                        <li>Documentação</li>
                        <li>Base de Conhecimento</li>
                    </ul>
                </div>
                <div className='list'>
                    <h2>Páginas</h2>
                    <ul>
                        <li>Blogs</li>
                        <li>Carreiras</li>
                        <li>Comunidade</li>
                        <li>Vídeos</li>
                    </ul>
                </div>
                <div className='list'>
                    <h2>Onde nos encontrar</h2>
                    <ul>
                        <li><GrLocation className='icon-footer'/>  R. Marquês de Valença, 470 - Boa Viagem, Recife - PE, 51021-500</li>
                    </ul>
                    <div className='icons'>
                        <SlSocialGoogle className='icon-footer'/>
                        <SlSocialTwitter className='icon-footer'/>
                        <SlSocialInstagram className='icon-footer'/>
                        <SlSocialLinkedin className='icon-footer'/>
                    </div>
                </div>
            </div>
            <div className='section-two'>
                <h3>Copyright @2023 Sunny Education. All Right Reserved</h3>
                <div className='menu'>
                <h4>Início</h4>
                <h4>Equipe</h4>
                <h4>Privacidade e Política</h4>
                <h4>Contato</h4>
                </div>
            </div>
        </div>
    )
}
