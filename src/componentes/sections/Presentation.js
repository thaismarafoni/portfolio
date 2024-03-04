import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation() {
    return (
        <div className={styles.Presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou a Thais!</h1>
            <p>
                Sou uma pessoa proativa por natureza e estou sempre em busca de atualizações e aprimoramentos.<br></br>
                Busco constantemente cursos e treinamentos para expandir meus conhecimentos e me manter atualizada nas melhores práticas da minha área.<br></br>
                Me considero uma solucionadora de problemas, enfrentando desafios de frente e buscando sempre encontrar soluções eficientes.<br></br>
                Acredito que a inovação é essencial no ambiente de trabalho e estou constantemente pensando em novas abordagens e<br></br>
                ideias criativas para impulsionar o crescimento e a excelência.
            </p>
            <ButtonA link='https://github.com/thaismarafoni' text='Conecte-se comigo!' />

        </div>
    )
}

export default Presentation