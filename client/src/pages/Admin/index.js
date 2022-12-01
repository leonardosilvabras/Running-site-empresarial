import styled from "styled-components";
import { Button, Input } from "../../components/buttons";
import Background from '../../assets/images/backgroundDark.png'

const Admin = () => {
  const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-image: url(${Background});
  `;

  const Login = styled.table`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
  `;

  const Title = styled.h2`
    color: white;
  `;

  return (
    <Content>
      <Title>Login</Title>
      <Login>
        <Input type="text" placeholder="Usuario" margin="10"/>
        <Input type="password" placeholder="Senha" margin="10"/>
        <Button width={200} backgroundColor="#fe2e2e" margin="10" color="white">
          Entrar  
        </Button>
      </Login>
    </Content>
  );
};

export default Admin;
