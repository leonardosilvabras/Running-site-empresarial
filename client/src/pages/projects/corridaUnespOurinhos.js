import { ProjetosDetails } from "../../components/projeto";
import Nav from "../../components/nav";
import UnespOurinhosImg from "../../assets/images/eventos/corridaUnespOurinhos/apresentacao.jpg";

export const UnespOurinhos = () => {
  return (
    <div>
      <Nav />
      <ProjetosDetails
        title="Circuito UNESP Ourinhos de Corrida e Caminhada"
        image={UnespOurinhosImg}
        desc="A corrida e caminhada no Câmpus de Ourinhos é um evento destinado às comunidades interna e externa que têm por objetivo geral dar incentivo à prática esportiva para prevenção de doenças e uso de drogas, como parte do processo de integração comunitária e de inclusão social, articulando ensino e extensão universitária. Como objetivos específicos visa a dar visibilidade da FCTE frente a cidade de Ourinhos e região para que a comunidade conheça melhor o Câmpus e o curso de Geografia e/ou valorize a sua inserção no cenário regional, além de fortalecer a parceria da UNESP com órgãos públicos municipais que atuam nas áreas do esporte. Por fim, espera-se uma contribuição para a qualidade de vida de todos os envolvidos promovendo a convivência, a socialização e o diálogo.
              No dia 03 de setembro de 2022, foi realizado a corrida Unesp Campus de Ourinhos, com a organização pela empresa RUNNING, este evento contou com a participação de 400 atletas de várias cidades da região de Ourinhos, foram divididos entre corrida e caminhada, pois os atletas puderam desenvolver os seus melhores tempos individuais durante a corrida, e no final ainda receberam uma medalha personalizada, frutas, isotônicos e premiação em troféus, a corrida foi um sucesso segundo a avaliação dos participantes.  
              "
      />
    </div>
  );
};
