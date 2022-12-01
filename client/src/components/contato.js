import styled from "styled-components";
import EmailIcon from "../assets/images/icons/email.png";
import TelIcon from "../assets/images/icons/telefone.png";
import FaceIcon from "../assets/images/icons/facebook.png";
import InstaIcon from "../assets/images/icons/instagram.png";

import { Button } from "./buttons";

const Contato = () => {
  const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 100%;
    min-height: 100vh;
  `;

  const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  `;

  const Contatos = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 2rem;
  `;

  const Contato = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20rem;
    text-decoration: none;
    margin: 0.5rem;
  `;

  const Icon = styled.img`
    width: 2rem;
  `;

  const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #fe2e2e;
  `;

  const Text = styled.p`
    font-size: 1.1rem;
    color: black;
  `;

  return (
    <Content id="Contato">
      <Title>Entre em contato conosco</Title>
      <Container>
        <Contatos>
          <Contato href="mailto:contato@myrunning.com.br">
            <Icon src={EmailIcon} alt="email" />
            <Text>contato@myrunning.com.br</Text>
          </Contato>
          <Contato>
            <Icon src={TelIcon} alt="telefone" />
            <Text>(17) 99605-6699</Text>
          </Contato>
          <Contato href="https://www.instagram.com/running.lhg/" target="blank">
            <Icon src={InstaIcon} alt="Instagram" />
            <Text>running.lhg</Text>
          </Contato>
          <Contato href="https://www.facebook.com/running.lhg" target="blank">
            <Icon src={FaceIcon} alt="facebook" />
            <Text>running.lhg</Text>
          </Contato>
        </Contatos>

        <Button
          href="mailto:contato@myrunning.com.br"
          target="blank"
          backgroundColor="#fe2e2e"
          color="white"
          width="300"
          height="50"
        >
          Pedir um orçamento
        </Button>
      </Container>
    </Content>
  );
};

export default Contato;
