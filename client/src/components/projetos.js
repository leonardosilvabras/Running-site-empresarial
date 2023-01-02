import styled from "styled-components";
import {Projetos} from "./projeto";
import CircuitoUnesp from "../assets/images/eventos/corridaUnespOurinhos/apresentacao.jpg";
import SaudeAtiva from "../assets/images/eventos/saudeAtiva/apresentasao.jpg";
const projetos = () => {
  const Content = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
  `;

  const Projeto = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  `;

  const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #fe2e2e;
  `;

  return (
    <Content id="Projetos">
      <Title>Eventos e serviços realizados</Title>
      <Projeto>
        <Projetos
          title="Circuito UNESP Ourinhos de Corrida e Caminhada"
          image={CircuitoUnesp}
          desc="Realizada no Câmpus de Ourinhos, é um evento destinado ao publico em geral, com o objetivo de incentivar à prática esportiva para prevenção de doenças e uso de drogas, conforme o processo de integração comunitária e de inclusão social."
          date="03/09/2022"
          link='/unespourinhos'
        />
        <Projetos
          title="III Corrida e IV Caminhada Saúde Ativa"
          image={SaudeAtiva}
          desc="Realizada no Câmpus de Rio Claro, é um evento destinado ao publíco geral, que têm por objetivo geral, dar incentivo à prática esportiva para prevenção de doenças e uso de drogas, como parte do processo de integração comunitária e de inclusão social."
          date="25/09/2022"
          link='/saudeativa'
        />
      </Projeto>
    </Content>
  );
};

export default projetos;
