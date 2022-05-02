import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src="assets/logo.svg" alt="dtmoney logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transacao</button>
      </Content>
    </Container>
  );
}