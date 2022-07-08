import logo from '../../assets/Logo.svg'
import logoIcon from '../../assets/logoIcon.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoIcon} alt="my wallet" />
          <span>My Wallet</span>
        </div>

        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}