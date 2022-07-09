import { useState } from 'react'
import Modal from 'react-modal'
import logoIcon from '../../assets/logoIcon.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({
  onOpenNewTransactionModal
}: HeaderProps) {

  return (
    <Container>
      <Content>
        <div>
          <img src={logoIcon} alt="my wallet" />
          <span>My Wallet</span>
        </div>

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}