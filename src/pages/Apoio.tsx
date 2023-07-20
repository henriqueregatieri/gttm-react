import styled from 'styled-components';
import { Title } from '../components/Title';

export const Apoio = () => {
  return (
    <Div>
      <Title>Apoio</Title>

      <div className='flex justify-center mt-24'>
        <a href='https://www.searabendita.org.br/'>
          <img src='/images/apoio/seara.jpg' alt='Seara Bendita' />
        </a>
      </div>
    </Div>
  );
};

const Div = styled.div`
  img {
    box-shadow: 0 0 7px white;
  }
`;
