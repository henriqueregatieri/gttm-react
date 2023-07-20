import React from 'react';
import styled from 'styled-components';
import { Text } from '../components/Text';
import { Title } from '../components/Title';

export const NossaHistoria: React.FC = () => {
  const Image = () => (
    <StyledImage>
      <img
        src='/images/nossa-historia/nossa-historia.jpg'
        alt='Nossa história'
      />
    </StyledImage>
  );

  return (
    <>
      <Title>Nossa História</Title>

      <Text>
        <Image />
        No ano de 1995, havia na Seara Bendita, uma classe de Evangelização
        Infantil, muito diferente, eis que os alunos não conseguiam se afinizar
        com nenhuma atividade, foi então que a turma de pré-adolescentes
        encontrou na arte cênica, uma nova motivação não só para o estudo da
        doutrina, bem como para se preparar para as novas etapas da vida!
        <br />
        <br />O Terceiro Milênio nasceu muito tímido, sem qualquer técnica
        teatral, mas com o decorrer do tempo, seus componentes iniciaram um
        processo de aprendizado interior, bastante intenso, precursor da
        verdadeira reforma íntima, valorizando cada gesto e cada sentimento de
        seu próximo, a União se tornou o símbolo do grupo.
        <br />
        <br />
        Hoje somos uma família, uma grande família, onde sentimos, rimos e
        choramos juntos, um apoiando o outro, quem entra ou quem sai, tem a
        satisfação interior de vivenciar momentos únicos, de verdadeira amizade
        com os demais e exercitar o autoconhecimento através dos diversos
        personagens, aos quais emprestamos o nosso talento, mas por justo
        retorno, a alegria de ser cada dia um pouco melhor.
        <br />E ainda por prazer em servir, vivenciamos a cada apresentação o
        nosso lema, que é:
        <br />
        <br />
        "EVANGELIZAR ATRAVÉS DA ARTE CÊNICA!"
        <br />
        <br />
        Peças apresentadas:
        <br />
        <br />- Terceiro Milênio (deu nome ao grupo) – 1995/1996;
        <br />- Alacibranbela – 1997/1998;
        <br />- A Árvore Encantada – 1999/2000;
        <br />- Sempre Há uma Saída – 2000/2001;
        <br />- Peninha, Um Fantasminha Medroso – 2000;
        <br />- Francisco, O Andarilho da Luz – 2002/2003;
        <br />- Elos – 2003/2004;
        <br />- O Resgate de Theodora – 2005/2007;
        <br />- Chico, Um Rastro de Luz – 2008/2010;
        <br />- Entrevidas – 2011/2014;
        <br />- O Amor Salva - 2015/Atual.
        <br />
        <br />
        Pequenos Quadros:
        <br />
        <br />- Meu Amigo (monólogo)
        <br />- Os Compadres
        <br />- ABC a Bezerra de Menezes
        <br />- Os Temores
        <br />- Os Palhaços
      </Text>
    </>
  );
};

const StyledImage = styled.div`
  float: right;
  margin-left: 40px;
  margin-bottom: 20px;
  width: 45%;
  img {
    width: 100%;
  }
`;
