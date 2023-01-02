import HomeBackground from "../assets/images/background.jpg";
import Logo from "../assets/images/logoRed.png";
import styled from "styled-components";

import { Button } from "./buttons";

const home = () => {
  const Home = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    width: 100%;
    min-height: 90vh;
    background-color: rgb(24, 24, 24);
  `;

  const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    filter: brightness(35%);

    @media (max-width: 800px) {
      display: none;
    }
  `;

  const Apresentacao = styled.div`
    z-index: 2;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  const Text = styled.p`
    font-size: 1.5rem;
    color: white;
  `;

  const SubTitle = styled.h2`
    font-size: 6rem;
    text-transform: uppercase;
    font-weight: bold;
    color: #fe2e2e;
    margin-bottom: 1rem;
  `;

  const LogoMarca = styled.img`
    width: 30rem;

    @media (max-width: 800px) {
      display: none;
    }
  `;

  const Link = styled.a`
    text-decoration: none;
    color: #fff;
  `;

  return (
    <Home id="Home">
      <Background src={HomeBackground} alt="background" />
      <Apresentacao>
        <div>
          <Text>Olá, bem vindo ao</Text>
          <SubTitle>Futuro</SubTitle>
          <Link href="mailto:contato@myrunning.com.br">
          <Button
            target="blank"
            backgroundColor="#fe2e2e"
            color="white"
            width="250"
            height="40"
          >
            Pedir um orçamento
          </Button>
          </Link>
        </div>
        <LogoMarca src={Logo} alt="logo" />
      </Apresentacao>
    </Home>
  );
};

export default home;
