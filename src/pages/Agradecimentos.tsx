import React from 'react';
import styled from 'styled-components';
import { Image } from '../components/Image';
import { Title } from '../components/Title';

export const Agradecimentos: React.FC = () => {
  const getPictures = (): string[] => {
    const pictures = [];

    for (let i = 1; i <= 38; i++) {
      pictures.push(i < 10 ? `0${i}.jpg` : `${i}.jpg`);
    }

    return pictures;
  };

  return (
    <StyledDiv>
      <Title>Agradecimentos</Title>

      <p className='my-16'>
        Essa parte do site é para homenagear a todos que passaram pelo grupo em
        especial à nossa grande amiga,
        <br />
        conselheira, irmã, mãe, Soninha, que está sempre conosco, nos vendo do
        outro lado...
      </p>

      <div className='flex justify-center'>
        <Image
          src='/images/agradecimentos/soninha.jpg'
          title='Soninha'
          style={{ height: '400px' }}
        />
      </div>

      <p className='my-16'>
        E a todos os nossos amigos que ainda estão, ou que já passaram
        <br />
        no grupo, que contribuíram de forma direta ou indireta...
      </p>

      <div className='flex flex-wrap justify-center'>
        {getPictures().map((item) => (
          <div>
            <Image
              src={`/images/agradecimentos/${item}`}
              style={{ height: '250px', margin: '10px' }}
            />
          </div>
        ))}
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  text-align: center;
  img:hover {
    outline: 2px solid dodgerblue;
  }
`;
