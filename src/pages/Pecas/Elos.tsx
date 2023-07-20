import { PhotoGallery } from 'components/PhotoGallery';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

export const Elos: React.FC = () => {
  const images = [
    '/images/pecas/elos/253655_2020629725565_4886228_n.jpg',
    '/images/pecas/elos/262065_2132065391387_1420216_n.jpg',
    '/images/pecas/elos/262218_2132063511340_5494838_n.jpg',
    '/images/pecas/elos/262780_2132064671369_8277236_n.jpg',
    '/images/pecas/elos/264300_2132064551366_753494_n.jpg',
    '/images/pecas/elos/267859_2132063111330_4508433_n.jpg',
    '/images/pecas/elos/268295_2132064031353_954909_n.jpg',
    '/images/pecas/elos/270284_2132057991202_3565521_n.jpg',
    '/images/pecas/elos/270432_2132057871199_945376_n.jpg',
    '/images/pecas/elos/Imagem10.jpg',
    '/images/pecas/elos/Imagem11.jpg',
    '/images/pecas/elos/Imagem12.jpg',
    '/images/pecas/elos/Imagem14.jpg',
    '/images/pecas/elos/Imagem15.jpg',
  ];

  return (
    <>
      <Title>Elos</Title>

      <Text>
        <p>
          <strong>Tema:</strong> Autoconhecimento, drogas, perdão.
        </p>
        <br />
        <p>
          <strong>Período em cartaz:</strong> 2003 / 2004.
        </p>
        <br />
        <p>
          Trama envolvente, onde pessoas ligadas por elos do presente e do
          passado enfrentam em seu cotidiano, dificuldades geradas por suas
          atitudes perante a vida e também por influência de irmãos menos
          esclarecidos que hoje estão no plano espiritual.
        </p>
        <br />
        <p>
          Temas como o uso de drogas, o apego material, o descontrole emocional
          e a falta de fé são abordados. Também fala sobre o perdão, a esperança
          e como a ajuda dos nossos irmãos do plano espiritual maior podem
          modificar nossas vidas e direcioná-las para o caminho do bem ensinado
          por Jesus.
        </p>
        <br />
        <p>
          Para o Grupo Teatral Terceiro Milênio foi mais uma oportunidade de
          passar uma mensagem de esperança e de alerta às famílias sobre
          problemas tão atuais como drogas, desestruturação dos lares,
          influências do plano espiritual e o elos das reencarnações, lembrando
          sempre que é no lar que germinam os princípios básicos para a
          estruturação do ser, e através da incansável colaboração dos abnegados
          irmãos do mundo maior, todos encontrarão seu caminho, cada qual,
          segundo seu livre arbítrio.
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
