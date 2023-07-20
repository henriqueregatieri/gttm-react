import { PhotoGallery } from 'components/PhotoGallery';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

export const OsTemores: React.FC = () => {
  const images = ['/images/pecas/os-temores/Imagem1.jpg'];

  return (
    <>
      <Title>Os Temores</Title>

      <Text>
        Uma sátira muito divertida e bem humorada criada pelo próprio elenco do
        grupo GTTM encalcada na figura mágica dos Tenores.
      </Text>
      <br />
      <br />

      <div className='mx-64'>
        <PhotoGallery images={images} />
      </div>
    </>
  );
};
