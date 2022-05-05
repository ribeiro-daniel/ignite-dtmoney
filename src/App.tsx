import React from "react";
import { useState } from "react";

import { Dashboard } from "components/Dashboard";
import { Header } from "components/Header";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "components/NewTransactionModal";
import { TransactionsProvider } from "hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
      </TransactionsProvider>
    </React.Fragment>
  );
}
