import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { Container } from "./style";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saida</p>
          <img src={outcome} alt="Saida" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}