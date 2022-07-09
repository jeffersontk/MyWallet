import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

Modal.setAppElement('#root')

export function App() {
  const [toggleModalNewTransaction, setToggleModalNewTransaction] = useState(false)

  const handleToggleModalNewTransaction = () => {
    setToggleModalNewTransaction(!toggleModalNewTransaction)
  }
  return (
    <>
      <Header
        onOpenNewTransactionModal={handleToggleModalNewTransaction}
      />
      <Dashboard />

      <Modal
        isOpen={toggleModalNewTransaction}
        onRequestClose={handleToggleModalNewTransaction}
      >
        <h2>Cadastrar nova Transação</h2>
      </Modal>
    </>
  );
}
