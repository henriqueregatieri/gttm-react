import { PhotoGallery } from 'components/PhotoGallery';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

export const FranciscoAndarilhoDaLuz: React.FC = () => {
  const images = ['/images/pecas/francisco-andarilho/Imagem8.jpg'];

  return (
    <>
      <Title>Francisco, O Andarilho da Luz</Title>

      <Text>
        <p>
          <strong>Tema:</strong> Vida de Francisco de Assis.
        </p>
        <br />
        <p>
          <strong>Período em cartaz:</strong> 2002 / 2003.
        </p>
        <br />
        <p>
          Francisco de Assis, o Andarilho da Luz, como era chamado, foi muito
          ligado à música e à natureza.
        </p>
        <br />
        <p>
          Sua vida e obra permanecem como um farol no tempo, iluminando os
          homens do século XXI que se propõem a construir um mundo novo -
          fraterno, justo e integrado à natureza.
        </p>
      </Text>
      <br />
      <br />

      <div className='mx-64'>
        <PhotoGallery images={images} />
      </div>
    </>
  );
};
