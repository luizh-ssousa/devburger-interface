import { Container } from './styles';
import Logo from '../../assets/logo.svg';

export function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt='logo-devburger' />
            </LeftContainer>
            <RightContainer>
                <Title>
                Olá, seja bem vindo ao <span>Dev Burguer!</span> Acesse com seu <span>Login e senha.</span>
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type='email'/>
                    </InputContainer>
                </Form>
            </RightContainer>
        </Container>
    );
}