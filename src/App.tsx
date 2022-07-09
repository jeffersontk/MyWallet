import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

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

      <NewTransactionModal
        isOpen={toggleModalNewTransaction}
        onRequestClose={handleToggleModalNewTransaction}
      />
    </>
  );
}
