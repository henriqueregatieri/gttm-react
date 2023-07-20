import styled from 'styled-components';
import { Image } from '../../components/Image';
import { Text } from '../../components/Text';
import { Title } from '../../components/Title';
import { Photos } from './Photos';
import { Video } from './Video';

export const GrupoVocal = () => {
  return (
    <>
      <Title>Grupo Vocal GTTM</Title>

      <StyledImages className='flex justify-center'>
        <div className='mx-5'>
          <Image src='/images/grupo-vocal/banda1.jpg' title='Grupo Vocal' />
        </div>

        <div className='mx-5'>
          <Image src='/images/grupo-vocal/banda2.jpg' title='Grupo Vocal' />
        </div>
      </StyledImages>

      <Text>
        <div className='my-12 text-center'>
          O Grupo Vocal GTTM surgiu durante os ensaios da peça Chico, um rastro
          de luz.
          <br />
          Criada para animar, alegrar, harmonizar o publico!
          <br />
          Veja abaixo algumas de nossas apresentações:
        </div>
      </Text>

      <div className='flex flex-wrap justify-around'>
        <Video id='5TxbZSkD_ZU' title='' />
        <Video id='01yiTJUKqVU' title='' />
        <Video id='yOt53Lw' title='' />
        <Video id='_chim0WQIgA' title='' />
        <Video id='RCrkI6WL5Wk' title='' />
      </div>

      <hr />

      <div className='mt-12'>
        <Title>Fotos</Title>
        <Photos />
      </div>
    </>
  );
};

const StyledImages = styled.div`
  img {
    height: 200px;
    border: 1px solid #ccc;
  }
`;
