import { Container } from "./style";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pagamento</td>
            <td className="deposit">R$5000.00</td>
            <td>Pessoal</td>
            <td>07/07/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1700.00</td>
            <td>Pessoal</td>
            <td>07/07/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}