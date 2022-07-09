import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./style";
import CloseIcon from '../../assets/close.svg'
import IncomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type
    }

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseIcon} alt="Fechar" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar nova Transação</h2>

        <input
          placeholder="titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={IncomeIcon} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeIcon} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}