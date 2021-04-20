import logoImg from  '../../assets/logo.svg';

import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="alt money"/>
                <button type="button">
                    Nova Transição
                </button>
            </Content>
        </Container>
    )
}