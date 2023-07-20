import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../components/Title';

export const Pecas: React.FC = () => {
  return (
    <>
      <Title>Peças GTTM</Title>

      <StyledDiv>
        <p>Peças Atuais:</p>

        <div className='content'>
          <Link to='o-amor-salva'>
            <img src='/images/pecas/o_amor_salva.png' alt='O Amor Salva' />
          </Link>
        </div>

        <p>Peças Apresentadas (já encerradas):</p>

        <div className='content'>
          <Link to='peninha'>
            <img src='/images/pecas/peninha.png' alt='Peninha' />
          </Link>
          <Link to='entrevidas'>
            <img src='/images/pecas/entrevidas.png' alt='Entrevidas' />
          </Link>
          <Link to='chico-rastro-de-luz'>
            <img
              src='/images/pecas/chico_rastro_luz.png'
              alt='Chico, Um Rastro de Luz'
            />
          </Link>
          <Link to='resgate-de-theodora'>
            <img
              src='/images/pecas/resgate_theodora.png'
              alt='O Resgate de Theodora'
            />
          </Link>
          <Link to='elos'>
            <img src='/images/pecas/elos.png' alt='Elos' />
          </Link>
          <Link to='francisco-o-andarilho-da-luz'>
            <img
              src='/images/pecas/francisco_andarilho.png'
              alt='Francisco, O Andarilho da Luz'
            />
          </Link>
          <Link to='sempre-ha-uma-saida'>
            <img
              src='/images/pecas/sempre_ha_uma_saida.png'
              alt='Sempra há uma saída'
            />
          </Link>
          {/*<Link to='nossas-primeiras-apresentacoes'> 
            <img
              src='/images/pecas/nossas_primeiras_apresentacoes.png'
              alt='Nossas Primeiras Apresentações'
            />
          </Link>*/}
        </div>

        <p>Pequenas Apresentações:</p>

        <div className='content'>
          <Link to='homenagem-a-bezerra-de-menezes'>
            <img src='/images/pecas/bezerra.png' alt='Bezerra de Menezes' />
          </Link>
          <Link to='os-palhacos'>
            <img src='/images/pecas/os_palhacos.png' alt='Os Palhaços' />
          </Link>
          <Link to='os-temores'>
            <img src='/images/pecas/os_temores.png' alt='Os Temores' />
          </Link>
          <Link to='os-compadres'>
            <img src='/images/pecas/os_compadres.png' alt='Os Compadres' />
          </Link>
        </div>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  text-align: center;
  p {
    margin-bottom: 20px;
    font-size: 1.2em;
    text-align: center;
  }
  .content {
    margin-bottom: 50px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    img {
      margin: 0 10px 20px;
    }
  }
`;
