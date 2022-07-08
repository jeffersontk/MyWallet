import logo from '../../assets/Logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="my wallet" />
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}