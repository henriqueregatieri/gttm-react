import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Home: React.FC = () => {
  const banners = [
    {
      backgroundImage: "url('/images/home/amor_salva.jpg')",
      url: 'pecas/o-amor-salva',
      title: 'Peça O Amor Salva',
      description: (
        <>
          Em breve,
          <br />
          novas datas!
        </>
      ),
    },
    {
      backgroundImage: "url('/images/home/banda.jpg')",
      url: 'grupo-vocal',
      title: 'Grupo Vocal GTTM',
      description: (
        <>
          Criado para animar, alegrar,
          <br />
          harmonizar o público
        </>
      ),
    },
    {
      backgroundImage: "url('/images/home/objetivo.jpg')",
      url: 'objetivo',
      title: 'Nosso Objetivo',
      description: (
        <>
          Saiba mais sobre
          <br />
          as atividades do grupo
        </>
      ),
    },
  ];

  return (
    <Banners>
      {banners.map((banner) => (
        <Link
          to={banner.url}
          style={{
            backgroundImage: banner.backgroundImage,
          }}
        >
          <div className='title'>{banner.title}</div>
          <div className='text'>
            <div className='description'>{banner.description}</div>
            <div className='more'>Ver mais &gt;&gt;</div>
          </div>
        </Link>
      ))}
    </Banners>
  );
};

const Banners = styled.div`
  height: 70vh;
  margin: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    display: block;
    background: #eaeaea;
    width: 29%;
    background-size: cover;
    box-shadow: 0 0 10px #888888;
    cursor: pointer;
    text-decoration: none;
    :hover {
      box-shadow: 0 0 10px #bbb;
    }
    .title {
      padding: 10px 0;
      text-align: center;
      font-size: 1.4rem;
      color: white;
      background-color: rgba(0, 0, 0, 0.7) !important;
      margin-bottom: 300px;
    }
    .text {
      color: white;
      margin: 10px;
      text-align: center;
      .description {
        padding: 10px 4px;
        font-size: 1.2rem;
        font-weight: normal;
        background: rgba(0, 0, 0, 0.7) !important;
        border-radius: 30px;
      }
      .more {
        font-size: 1rem;
        text-align: right;
        margin-top: 10px;
        text-shadow: 0px 0px 2px #eeeeee;
        a {
          color: black;
          text-decoration: underline;
        }
      }
    }
  }
`;
