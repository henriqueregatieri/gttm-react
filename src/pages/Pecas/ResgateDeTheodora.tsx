import { PhotoGallery } from 'components/PhotoGallery';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

export const ResgateDeTheodora: React.FC = () => {
  const images = [
    '/images/pecas/resgate-theodora/Imagem 000001.jpg',
    '/images/pecas/resgate-theodora/Imagem 225.jpg',
    '/images/pecas/resgate-theodora/Imagem 000002.jpg',
    '/images/pecas/resgate-theodora/Imagem 002 - Copia.jpg',
    '/images/pecas/resgate-theodora/Imagem 018 - Copia.jpg',
    '/images/pecas/resgate-theodora/Imagem 026 - Copia.jpg',
    '/images/pecas/resgate-theodora/Imagem 031.jpg',
    '/images/pecas/resgate-theodora/Imagem 039.jpg',
    '/images/pecas/resgate-theodora/Imagem 053.jpg',
    '/images/pecas/resgate-theodora/Imagem 061.jpg',
    '/images/pecas/resgate-theodora/Imagem 063.jpg',
    '/images/pecas/resgate-theodora/Imagem 064.jpg',
    '/images/pecas/resgate-theodora/Imagem 068.jpg',
    '/images/pecas/resgate-theodora/Imagem 069.jpg',
    '/images/pecas/resgate-theodora/Imagem 070.jpg',
    '/images/pecas/resgate-theodora/Imagem 072.jpg',
    '/images/pecas/resgate-theodora/Imagem 074.jpg',
    '/images/pecas/resgate-theodora/Imagem 075.jpg',
    '/images/pecas/resgate-theodora/Imagem 078.jpg',
    '/images/pecas/resgate-theodora/Imagem 079.jpg',
    '/images/pecas/resgate-theodora/Imagem 080.jpg',
    '/images/pecas/resgate-theodora/Imagem 081.jpg',
    '/images/pecas/resgate-theodora/Imagem 103.jpg',
    '/images/pecas/resgate-theodora/Imagem 104.jpg',
    '/images/pecas/resgate-theodora/Imagem 107.jpg',
    '/images/pecas/resgate-theodora/Imagem 108.jpg',
    '/images/pecas/resgate-theodora/Imagem 111.jpg',
    '/images/pecas/resgate-theodora/Imagem 112.jpg',
    '/images/pecas/resgate-theodora/Imagem 113.jpg',
    '/images/pecas/resgate-theodora/Imagem 114.jpg',
    '/images/pecas/resgate-theodora/Imagem 116.jpg',
    '/images/pecas/resgate-theodora/Imagem 118.jpg',
    '/images/pecas/resgate-theodora/Imagem 119.jpg',
    '/images/pecas/resgate-theodora/Imagem 120.jpg',
    '/images/pecas/resgate-theodora/Imagem 121.jpg',
    '/images/pecas/resgate-theodora/Imagem 122.jpg',
    '/images/pecas/resgate-theodora/Imagem 123.jpg',
    '/images/pecas/resgate-theodora/Imagem 124.jpg',
    '/images/pecas/resgate-theodora/Imagem 125.jpg',
    '/images/pecas/resgate-theodora/Imagem 126.jpg',
    '/images/pecas/resgate-theodora/Imagem 127.jpg',
    '/images/pecas/resgate-theodora/Imagem 128.jpg',
    '/images/pecas/resgate-theodora/Imagem 129.jpg',
    '/images/pecas/resgate-theodora/Imagem 130.jpg',
    '/images/pecas/resgate-theodora/Imagem 132.jpg',
    '/images/pecas/resgate-theodora/Imagem 133.jpg',
    '/images/pecas/resgate-theodora/Imagem 134.jpg',
    '/images/pecas/resgate-theodora/Imagem 135.jpg',
    '/images/pecas/resgate-theodora/Imagem 136.jpg',
    '/images/pecas/resgate-theodora/Imagem 141.jpg',
    '/images/pecas/resgate-theodora/Imagem 142.jpg',
    '/images/pecas/resgate-theodora/Imagem 143.jpg',
    '/images/pecas/resgate-theodora/Imagem 145.jpg',
    '/images/pecas/resgate-theodora/Imagem 147.jpg',
    '/images/pecas/resgate-theodora/Imagem 148.jpg',
    '/images/pecas/resgate-theodora/Imagem 149.jpg',
    '/images/pecas/resgate-theodora/Imagem 152.jpg',
    '/images/pecas/resgate-theodora/Imagem 153.jpg',
    '/images/pecas/resgate-theodora/Imagem 154.jpg',
    '/images/pecas/resgate-theodora/Imagem 155.jpg',
    '/images/pecas/resgate-theodora/Imagem 156.jpg',
    '/images/pecas/resgate-theodora/Imagem 157.jpg',
    '/images/pecas/resgate-theodora/Imagem 160.jpg',
    '/images/pecas/resgate-theodora/Imagem 165.jpg',
    '/images/pecas/resgate-theodora/Imagem 168.jpg',
    '/images/pecas/resgate-theodora/Imagem 172.jpg',
    '/images/pecas/resgate-theodora/Imagem 173.jpg',
    '/images/pecas/resgate-theodora/Imagem 175.jpg',
    '/images/pecas/resgate-theodora/Imagem 177.jpg',
    '/images/pecas/resgate-theodora/Imagem 181.jpg',
    '/images/pecas/resgate-theodora/Imagem 183.jpg',
    '/images/pecas/resgate-theodora/Imagem 187.jpg',
    '/images/pecas/resgate-theodora/Imagem 188.jpg',
    '/images/pecas/resgate-theodora/Imagem 189.jpg',
    '/images/pecas/resgate-theodora/Imagem 190.jpg',
    '/images/pecas/resgate-theodora/Imagem 193.jpg',
    '/images/pecas/resgate-theodora/Imagem 194.jpg',
    '/images/pecas/resgate-theodora/Imagem 195.jpg',
    '/images/pecas/resgate-theodora/Imagem 197.jpg',
    '/images/pecas/resgate-theodora/Imagem 198.jpg',
    '/images/pecas/resgate-theodora/Imagem 199.jpg',
    '/images/pecas/resgate-theodora/Imagem 200.jpg',
    '/images/pecas/resgate-theodora/Imagem 202.jpg',
    '/images/pecas/resgate-theodora/Imagem 203.jpg',
    '/images/pecas/resgate-theodora/Imagem 204.jpg',
    '/images/pecas/resgate-theodora/Imagem 205.jpg',
    '/images/pecas/resgate-theodora/Imagem 206.jpg',
    '/images/pecas/resgate-theodora/Imagem 208.jpg',
    '/images/pecas/resgate-theodora/Imagem 209.jpg',
    '/images/pecas/resgate-theodora/Imagem 210.jpg',
    '/images/pecas/resgate-theodora/imagem 00217.jpg',
    '/images/pecas/resgate-theodora/Imagem 217.jpg',
    '/images/pecas/resgate-theodora/Imagem 218.jpg',
    '/images/pecas/resgate-theodora/Imagem 219.jpg',
    '/images/pecas/resgate-theodora/Imagem 220.jpg',
    '/images/pecas/resgate-theodora/Imagem 222.jpg',
    '/images/pecas/resgate-theodora/Imagem 224.jpg',
  ];

  return (
    <>
      <Title>O Resgate de Theodora</Title>

      <Text>
        <p>
          <strong>Tema:</strong> Autoconhecimento, drogas, perdão.
        </p>
        <br />
        <p>
          <strong>Período em cartaz:</strong> 2005 / 2007.
        </p>
        <br />
        <p>
          Através da narração da história dos componentes de uma família que
          vivem em uma fazenda no interior do Brasil no século XIX, suas atuais
          reencarnações em nossa época e sua vivência no plano espiritual
          (Colônia Manto de Maria), vários temas são abordados, sempre sob a luz
          da Doutrina Espírita:
        </p>
        <br />
        <p>Vida após a morte</p>
        <p>Desencarne precoce</p>
        <p>Comprometimentos reencarnatórios</p>
        <p>Mal de Alzheimer</p>
        <p>Aborto</p>
        <p>Anencefalia</p>
        <br />
        <p>
          Como também o perdão, a esperança e a ajuda dos nossos irmãos do plano
          espiritual maior podem modificar nossas vidas e direcioná-las para o
          caminho do bem ensinado por Jesus.
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
