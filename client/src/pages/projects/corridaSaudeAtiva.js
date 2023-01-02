import { ProjetosDetails } from "../../components/projeto";
import Nav from "../../components/nav";
import SaudeAtivaImg from "../../assets/images/eventos/saudeAtiva/apresentasao.jpg";

export const SaudeAtiva = () => {
  return (
    <div>
      <Nav />
      <ProjetosDetails
        title="III Corrida e IV Caminhada Saúde Ativa"
        image={SaudeAtivaImg}
        desc="corrida e caminhada no Câmpus de Rio Claro é um evento destinado as comunidades interna e externa que têm por objetivo geral dar incentivo à prática esportiva para prevenção de doenças e uso de drogas, como parte do processo de integração comunitária e de inclusão social, articulando ensino e extensão universitária. Como objetivos específicos visa a dar visibilidade da Unesp De Rio Claro frente a cidade e região para que a comunidade conheça melhor o Câmpus e seus cursos e valorize a sua inserção no cenário regional, além de fortalecer a parceria da UNESP com órgãos públicos municipais que atuam nas áreas do esporte. Por fim, espera-se uma contribuição para a qualidade de vida de todos os envolvidos promovendo a convivência, a socialização e o diálogo.
              Neste final de semana aconteceu a realização da III corridda e IV caminhada Saúde Ativa no Campus da Unesp de Rio claro no dia 25 de setembro de 2022, onde contou com a participação de 600 atletas que foram divididos entre corrida de 5km e caminhada de 3km, um belissimo percuso dentro do campus Unesp bem variado e muito arborizado fazendo com que os atletas se sentissem bem a vontade para desenvolver o seu melhor ritmo e alcaçar o seu melhor tempo individual, além de contar com posto de hidratação os mesmos receberam no final da prova uma belissima medalha, frutas, isotônico e participaram de premiação com troféus, a corrida foi um verdadeiro sucesso na avaliaçção dos corredores e publico presente.
              "
      />
    </div>
  );
};
