import styled from "styled-components";
import LogoMarca from "../../assets/images/logoRed.png";

const Painel = () => {
  const Content = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
  `;

  const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgb(20, 20, 20);
  `;

  const Title = styled.p`
    color: white;
  `;
  const Id = styled.p`
    color: #fe2e2e;
    margin-right: 1rem;
  `;

  const Input = styled.input`
    width: 15rem;
    height: 3rem;
    padding: 0.5rem;
    margin: 1rem;
  `;

  const Submit = styled.input`
    padding: 1rem;
    padding: 0.5rem;
    margin: 1rem;
    background-color: #fe2e2e;
  `;

  const Logo = styled.img`
    width: 30rem;
  `;

  return (
    <Content>
      <Logo src={LogoMarca} alt="Running Logo" />
      <Item>
        <Id>1</Id>
        <Title>Url da imagem</Title>
        <Input
          type="text"
          placeholder="images/eventos/saudeAtiva/apresentasao.jpg"
        />
        <Title>Descricao</Title>
        <Input
          type="text"
          placeholder="Running realiza a III Corrrida e IV Caminhada Saúde Ativa - 2022 todas
          as fotos disponiveis no site focoradiral.com.br"
        />
        <Title>Ano</Title>
        <Input type="text" placeholder="2022" />
        <Submit type="submit" />
      </Item>
    </Content>
  );
};

export default Painel;
