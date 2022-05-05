import { useTransactions } from "hooks/useTransactions";
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  const amountFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src="assets/income.svg" alt="Entradas" />
        </header>
        <strong>{amountFormatter.format(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src="assets/outcome.svg" alt="Saidas" />
        </header>
        <strong>- {amountFormatter.format(summary.withdraws)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src="assets/total.svg" alt="Total" />
        </header>
        <strong>{amountFormatter.format(summary.total)}</strong>
      </div>
    </Container>
  );
}
