import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src="assets/income.svg" alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src="assets/outcome.svg" alt="Saidas" />
        </header>
        <strong>- R$300,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src="assets/total.svg" alt="Total" />
        </header>
        <strong>R$700,00</strong>
      </div>
    </Container>
  );
}