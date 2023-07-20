import React from 'react';
import styled from 'styled-components';
import { Image } from '../components/Image';
import { Title } from '../components/Title';

export const Midia: React.FC = () => {
  const ImageChico: React.FC<{ filename: string }> = ({ filename }) => (
    <Image
      src={`/images/midia/chico-rastro-luz/${filename}`}
      title=''
      style={{ height: '200px', margin: '30px' }}
    />
  );

  const ImageEntrevidas: React.FC<{ filename: string }> = ({ filename }) => (
    <Image
      src={`/images/midia/entrevidas/${filename}`}
      title=''
      style={{ height: '400px', margin: '30px' }}
    />
  );

  return (
    <StyledDiv>
      <Title>GTTM na Mídia </Title>

      <p className='subtitle'>Chico, Um Rastro de Luz</p>

      <div>
        <div className='flex justify-center'>
          <div>
            <ImageChico filename='1.jpg' />
          </div>
          <div>
            <ImageChico filename='2.jpg' />
          </div>
        </div>

        <div className='flex justify-center'>
          <div>
            <ImageChico filename='3.jpg' />
          </div>

          <div>
            <ImageChico filename='4.jpg' />
          </div>
        </div>
      </div>

      <hr />

      <p className='subtitle'>Entrevidas</p>
      <p className='subsubtitle'>Revista o Semeador</p>

      <div className='flex justify-center mb-8'>
        <div>
          <ImageEntrevidas filename='o-semeador-1.png' />
        </div>

        <div>
          <ImageEntrevidas filename='o-semeador-2.png' />
        </div>
      </div>

      <p>
        Clique no link abaixo para ver toda noticia na íntegra:
        <br />
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a
          href='http://issuu.com/feesp/docs/revistaosemeadordejulho'
          target='_blank'
        >
          http://issuu.com/feesp/docs/revistaosemeadordejulho
        </a>
        <br />
        &nbsp;
      </p>

      <p className='subsubtitle'>Jornal Feesp: Junho 2013</p>

      <div className='flex justify-center'>
        <div>
          <ImageEntrevidas filename='jornal1.png' />
        </div>

        <div>
          <ImageEntrevidas filename='jornal2.png' />
        </div>
      </div>

      <p>
        Clique no link abaixo para ver toda noticia na íntegra:
        <br />
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a
          href='http://issuu.com/feesp/docs/jornal-feesp-junho13'
          target='_blank'
        >
          http://issuu.com/feesp/docs/jornal-feesp-junho13
        </a>
        <br />
        &nbsp;
      </p>

      <p className='subsubtitle'>
        Abril 2013 - XXVII Mês do Teatro Espírita de Indaiatuba
      </p>

      <div className='flex justify-center'>
        <ImageEntrevidas filename='indaiatuba.jpg' />
      </div>

      <hr />

      <p className='subtitle'>Outras Apresentações</p>

      <div className='flex justify-center'>
        <Image
          src='/images/midia/outras/festa-julina.jpg'
          title=''
          style={{ height: '400px' }}
        />
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  text-align: center;
  hr {
    margin: 30px 0 40px;
  }
  .subtitle {
    text-align: center;
    text-decoration: underline;
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  .subsubtitle {
    margin-top: 3rem;
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  a {
    color: dodgerblue;
    :hover {
      color: lightskyblue;
    }
  }
`;
