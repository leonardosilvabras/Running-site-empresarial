import styled from "styled-components";

const Projetos = ({ project }) => {
  const lerDados = () => {
    fetch('/routes/project').then(res => console.log(res));
  }
  
  lerDados();

  const Projeto = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;

    height: 400px;
    background-color: rgb(24, 24, 24);
  `;

  const Imagem = styled.img`
    width: 90%;
    height: 50%;
  `;

  const Desc = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    color: white;
  `;

  const Text = styled.p`
    text-align: justify;
    width: 70%;
  `;
  const Date = styled.p`
    padding: 1rem;
    border: 1px solid #fe2e2e;
  `;

  return (
    <Projeto>
      <Imagem src={project.image} alt={project.alt}></Imagem>
      <Desc>
        <Date>{project.date}</Date>
        <Text>{project.description}</Text>
      </Desc>
    </Projeto>
  );
};

export default Projetos;
