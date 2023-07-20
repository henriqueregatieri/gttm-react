import { PhotoGallery } from 'components/PhotoGallery';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

export const OsCompadres: React.FC = () => {
  const images = ['/images/pecas/os-compadres/os_compadres.jpg'];

  return (
    <>
      <Title>Os Compadres</Title>

      <Text>
        Os compadres foram criados para homenagear os sertanejos e as pessoas
        simples de raízes profundas dos sertões de MG, quando da visita do grupo
        a Sacramento para a apresentação da peça O Resgate de Theodora.
        <br />
        <br />
        Trecho cantado da homenagem:
        <br />
        <br />
        <div style={{ textAlign: 'center' }}>
          SEARA BENDITA, RECANTO DA EVOLUÇÃO
          <br />
          <br />A seara instituição espírita
          <br />
          Criada para nos auxiliar
          <br />
          Nos ajudando a entender
          <br />O que tem no mundo de lá
          <br />O legado do nosso irmão perfeito
          <br />A doutrina espírita utiliza
          <br />
          Pra transformar o ser humano
          <br />
          Em espírito puro algum dia
          <br />
          No processo de evolução
          <br />O ser humano já foi mineral, vegetal e animal
          <br />E hoje provido de razão é capaz até de pensar
          <br />
          Mas ainda é orgulhoso e precisa aprender a perdoar
          <br />E bem aventurados são aqueles
          <br />
          Os puros de coração
          <br />
          Os que praticam caridade
          <br />
          Os que praticam o perdão
          <br />
          Nesse ritmo sertanejo
          <br />
          Em que a música se inspira
          <br />
          Pode até ser mer caipira
          <br />
          Mas faz bem pro nosso irmão
          <br />
          Agora vamos nos despedindo
          <br />
          Depois de contar essa breve história
          <br />
          Do espiritismo de kardec...
          <br />
          Que difundiu mundão afora...
        </div>
        <br />
        <p style={{ textAlign: 'right' }}>Roberto Sandro da Silva Ramalho</p>
      </Text>

      <br />
      <br />

      <div className='mx-64'>
        <PhotoGallery images={images} />
      </div>
    </>
  );
};
