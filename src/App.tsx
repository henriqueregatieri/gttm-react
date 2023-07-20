import 'normalize.css';
import styled from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Objetivo } from './pages/Objetivo';
import { colors } from './helpers/colors';
import { NossaHistoria } from './pages/NossaHistoria';
import { Pecas } from './pages/Pecas';
import { Agenda } from './pages/Agenda';
import { Apoio } from './pages/Apoio';
import { GrupoVocal } from './pages/GrupoVocal';
import { Midia } from './pages/Midia';
import { Agradecimentos } from './pages/Agradecimentos';
import { Contato } from './pages/Contato';
import { OAmorSalva } from 'pages/Pecas/OAmorSalva';
import { Peninha } from 'pages/Pecas/Peninha';
import { Entrevidas } from 'pages/Pecas/Entrevidas';
import { ChicoRastroDeLuz } from 'pages/Pecas/ChicoRastroDeLuz';
import { ResgateDeTheodora } from 'pages/Pecas/ResgateDeTheodora';
import { Elos } from 'pages/Pecas/Elos';
import { FranciscoAndarilhoDaLuz } from 'pages/Pecas/FranciscoAndarilhoDaLuz';
import { SempreHaUmaSaida } from 'pages/Pecas/SempreHaUmaSaida';
import { HomenagemABezerraDeMenezes } from 'pages/Pecas/HomenagemABezerraDeMenezes';
import { OsPalhacos } from 'pages/Pecas/OsPalhacos';
import { OsTemores } from 'pages/Pecas/OsTemores';
import { OsCompadres } from 'pages/Pecas/OsCompadres';
import { Youtube } from 'pages/Youtube';

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <StyledApp className='App'>
          <Header />
          <Content>
            <Routes>
              <Route index element={<Home />} />
              <Route path='agenda' element={<Agenda />} />
              <Route path='agradecimentos' element={<Agradecimentos />} />
              <Route path='apoio' element={<Apoio />} />
              <Route path='contato' element={<Contato />} />
              <Route path='grupo-vocal' element={<GrupoVocal />} />
              <Route path='midia' element={<Midia />} />
              <Route path='nossa-historia' element={<NossaHistoria />} />
              <Route path='objetivo' element={<Objetivo />} />
              <Route path='pecas'>
                <Route path='' element={<Pecas />} />
                <Route
                  path='homenagem-a-bezerra-de-menezes'
                  element={<HomenagemABezerraDeMenezes />}
                />
                <Route
                  path='chico-rastro-de-luz'
                  element={<ChicoRastroDeLuz />}
                />
                <Route path='elos' element={<Elos />} />
                <Route path='entrevidas' element={<Entrevidas />} />
                <Route
                  path='francisco-o-andarilho-da-luz'
                  element={<FranciscoAndarilhoDaLuz />}
                />
                <Route path='o-amor-salva' element={<OAmorSalva />} />
                <Route path='os-compadres' element={<OsCompadres />} />
                <Route path='os-palhacos' element={<OsPalhacos />} />
                <Route path='os-temores' element={<OsTemores />} />
                <Route path='peninha' element={<Peninha />} />
                <Route
                  path='resgate-de-theodora'
                  element={<ResgateDeTheodora />}
                />
                <Route
                  path='sempre-ha-uma-saida'
                  element={<SempreHaUmaSaida />}
                />
              </Route>
              <Route path='youtube' element={<Youtube />} />
            </Routes>
          </Content>
        </StyledApp>
      </ChakraProvider>
    </BrowserRouter>
  );
};

const StyledApp = styled.div`
  color: ${colors.light};
  font-size: 1.4rem;
  text-shadow: 1px 1px 3px ${colors.dark};
  min-width: 1150px;
  max-width: 1268px;
  min-height: 85vh;
  margin: 0 auto;
  background: #ffffff url('/images/background.jpg');
  background-size: 100% auto;
  background-repeat: repeat-y;
  box-shadow: 0 0 5px rgba(100, 100, 100, 0.7);
  padding-bottom: 40px;
`;

const Content = styled.div`
  padding: 35px;
  min-height: 520px;
`;
