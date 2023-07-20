import { Tooltip } from '@chakra-ui/tooltip';
import { URL_YOUTUBE } from 'helpers/utils';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../helpers/colors';

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className='logo'>
        <Link to='/'>
          <img src='/images/header/logo_small.png' alt='Logo' />
        </Link>
      </div>

      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/objetivo'>Objetivo</Link>
        <Link to='/nossa-historia'>
          Nossa
          <br />
          História
        </Link>
        <Link to='/pecas'>Peças</Link>
        <Link to='/agenda'>Agenda</Link>
        <Link to='/apoio'>Apoio</Link>
        <Link to='/grupo-vocal'>
          Grupo
          <br />
          Vocal
        </Link>
        <Link to='/midia'>
          GTTM na
          <br />
          Mídia
        </Link>
        <Link to='/agradecimentos'>Agradecimentos</Link>
        <Link to='/contato'>Contato</Link>
      </div>

      <div className='social'>
        <Tooltip label='Facebook'>
          <div>
            <a
              href='https://www.facebook.com/gttmnairmoraes'
              target='_blank'
              rel='noreferrer'
              className='facebook'
            >
              <img src='/images/header/facebook.png' alt='Facebook' />
            </a>
          </div>
        </Tooltip>

        <Tooltip label='Instagram'>
          <div>
            <a
              href='https://www.instagram.com/gttmnairmoraes/'
              target='_blank'
              rel='noreferrer'
              className='instagram'
            >
              <img src='/images/header/instagram.png' alt='Instagram' />
            </a>
          </div>
        </Tooltip>

        <Tooltip label='YouTube'>
          <div>
            <a
              href={URL_YOUTUBE}
              target='_blank'
              rel='noreferrer'
              className='youtube'
            >
              <img src='/images/header/youtube.png' alt='YouTube' />
            </a>
          </div>
        </Tooltip>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  height: 80px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  .logo {
    margin: 0 45px 0 10px;
  }
  .links {
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    a {
      text-decoration: none;
      text-align: center;
      color: ${colors.light};
      line-height: 1.4rem;
      &:hover {
        text-shadow: 0 0 10px ${colors.light};
      }
      @media screen and (max-width: 1232px) {
        padding: 8px 6px;
      }
    }
  }
  .social {
    width: 120px;
    height: 53px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px 0 30px;
    > div {
      a {
        display: block;
        img {
          opacity: 0.9;
          width: 28px;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
