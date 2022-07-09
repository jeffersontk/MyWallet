import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {
  const [toggleModalNewTransaction, setToggleModalNewTransaction] = useState(false)

  const handleToggleModalNewTransaction = () => {
    setToggleModalNewTransaction(!toggleModalNewTransaction)
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleToggleModalNewTransaction}
      />

      <Dashboard />

      <NewTransactionModal
        isOpen={toggleModalNewTransaction}
        onRequestClose={handleToggleModalNewTransaction}
      />
    </TransactionsProvider>
  );
}
