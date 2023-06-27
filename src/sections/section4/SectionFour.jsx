import Card from '../../components/card/Card';
import './styles.css';

export default function SectionFour() {
    return (
        <div className='SectionFour'>
            <h1>Nosso Processo</h1>
            <p className='text'>
                Veja como nós trabalhamos e entenda o processo que seguimos
            </p>
            <div className='cards'>
                <Card number={1} title={"Faça o registro"} text={"É só inserir um e-mail válido e número para a confirmação."} color={'number-1'}/>
                <Card number={2} title={"Aprenda com nossos vídeos "} text={"Vídeos interativos de fácil compreensão para seus filhos."} color={'number-2'} />
                <Card number={3} title={"Veja o seu progresso"} text={"Veja o progresso e acompanhe a evolução de sua criança."} color={'number-3'}/>
            </div>

        </div>
    )
}