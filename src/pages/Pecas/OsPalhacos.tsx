import { PhotoGallery } from 'components/PhotoGallery';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

export const OsPalhacos: React.FC = () => {
  const images = [
    '/images/pecas/os-palhacos/os temores2.jpg',
    '/images/pecas/os-palhacos/002.jpg',
    '/images/pecas/os-palhacos/DSC01878-800.jpg',
    '/images/pecas/os-palhacos/DSC01882-800.jpg',
    '/images/pecas/os-palhacos/DSC01885-800.jpg',
    '/images/pecas/os-palhacos/DSC01887-800.jpg',
    '/images/pecas/os-palhacos/DSC01888-800.jpg',
    '/images/pecas/os-palhacos/DSC01889-800.jpg',
    '/images/pecas/os-palhacos/DSC01910-800.jpg',
    '/images/pecas/os-palhacos/DSC01911-800.jpg',
    '/images/pecas/os-palhacos/DSC01912-800.jpg',
    '/images/pecas/os-palhacos/DSC01913-800.jpg',
    '/images/pecas/os-palhacos/DSC01915-800.jpg',
    '/images/pecas/os-palhacos/DSC01916-800.jpg',
    '/images/pecas/os-palhacos/DSC01917-800.jpg',
    '/images/pecas/os-palhacos/OgAAALCMCn.jpg',
  ];

  return (
    <>
      <Title>Os Palhaços</Title>

      <Text>
        Na base da improvisação, o grupo que trabalha em "Os Palhaços" alegra e
        diverte as crianças de orfanatos, casas, abrigos e escolas.
      </Text>

      <br />
      <br />

      <div className='mx-64'>
        <PhotoGallery images={images} />
      </div>
    </>
  );
};
