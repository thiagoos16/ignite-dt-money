import { Container } from "./styles";

export function TransationsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Freela Marijane</td>
                        <td className="deposit">R$1200,00</td>
                        <td>Freela</td>
                        <td>12/05/2021</td>
                    </tr>

                    <tr>
                        <td>Funko Pop</td>
                        <td>- R$50,00</td>
                        <td>Action Figures</td>
                        <td>01/02/2021</td>
                    </tr>

                    <tr>
                        <td>Freela Ednaldo</td>
                        <td className="withdraw">R$900,00</td>
                        <td>Freela</td>
                        <td>12/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
} 