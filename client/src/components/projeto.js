import styled from "styled-components";
import { Button } from "./buttons";

export const Projetos = ({ title, image, desc, date, link }) => {
  const ProjectItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    height: 450px;
    background-color: #202020;
    padding: 1rem;
    border-radius: 0.5rem;
  `;

  const ProjectTitle = styled.h2`
    font-size: 1.3rem;
    text-align: center;
    font-weight: bold;
    color: #fe2e2e;
  `;

  const ProjectImage = styled.img`
    width: 280px;
    height: 160px;
  `;

  const ProjectDesc = styled.p`
    text-align: justify;
    color: #fff;
  `;
  const ProjectEnd = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `;

  const ProjectData = styled.p`
    padding: 0.5rem;
    border: 2px solid #fe2e2e;
    color: #fff;
    font-size: 1.1rem;
  `;

  const Link = styled.a`
    text-decoration: none;
    color: #fff;
  `;
  return (
    <ProjectItems>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectImage src={image} />
      <ProjectDesc>{desc}</ProjectDesc>
      <ProjectEnd>
        <ProjectData>{date}</ProjectData>
        <Link href={link}>
          <Button
            target="blank"
            backgroundColor="#fe2e2e"
            color="white"
            width="200"
            height="40"
          >
            Ler sobre
          </Button>
        </Link>
      </ProjectEnd>
    </ProjectItems>
  );
};