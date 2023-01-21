import styled from "styled-components";

export const Projetodetalhe = (title, image, desc) => {
  const Cartao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 10vh 1rem 1rem 1rem;
  `;

  const Titulo = styled.h2`
    font-size: 1.3rem;
    color: #fe2e2e;
  `;

  const Imagem = styled.img`
    max-width: 100%;
    width: 600px;
    margin-top: 1rem;
  `;

  const Descricao = styled.p`
    text-align: justify;
    justify-content: center;
    margin-top: 1rem;
    max-width: 800px;
  `;
  return (
    <Cartao>
      <Titulo>{title}</Titulo>
      <Imagem src={image} />
      <Descricao>{desc}</Descricao>
    </Cartao>
  );
};
