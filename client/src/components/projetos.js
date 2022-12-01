import styled from "styled-components";
import Projeto from "./projeto";

const data = "";

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

  const Projetos = styled.div`
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
      <Projetos>
        {data?.data?.map((project) => {
          return <Projeto key={project.slug} project={project} />;
        })}
      </Projetos>
    </Content>
  );
};

export default projetos;
