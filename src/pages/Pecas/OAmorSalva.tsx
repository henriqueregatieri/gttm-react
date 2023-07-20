import { PhotoGallery } from 'components/PhotoGallery';
import { Title } from 'components/Title';
import { Text } from 'components/Text';

export const OAmorSalva: React.FC = () => {
  const images = [
    '/images/pecas/o-amor-salva/_MG_2728.jpg',
    '/images/pecas/o-amor-salva/_MG_2681.jpg',
    '/images/pecas/o-amor-salva/_MG_2702.jpg',
    '/images/pecas/o-amor-salva/_MG_2709.jpg',
    '/images/pecas/o-amor-salva/_MG_2720.jpg',
    '/images/pecas/o-amor-salva/_MG_2796.jpg',
    '/images/pecas/o-amor-salva/_MG_2797.jpg',
    '/images/pecas/o-amor-salva/_MG_2843.jpg',
    '/images/pecas/o-amor-salva/15016395_1269017606505786_6570231691692360020_o.jpg',
    '/images/pecas/o-amor-salva/15016429_1269013393172874_366091321150545607_o.jpg',
    '/images/pecas/o-amor-salva/15025298_1268982839842596_5642854730389802196_o.jpg',
    '/images/pecas/o-amor-salva/15025305_1268981976509349_6706449424283529177_o.jpg',
    '/images/pecas/o-amor-salva/15025355_1269003009840579_4413330417502089403_o.jpg',
    '/images/pecas/o-amor-salva/15025422_1269024983171715_4595141723642377661_o.jpg',
    '/images/pecas/o-amor-salva/15039461_1268986666508880_776772423873660380_o.jpg',
    '/images/pecas/o-amor-salva/15039620_1269037403170473_2483230950108602373_o.jpg',
    '/images/pecas/o-amor-salva/15039628_1269007313173482_3637203922731711868_o.jpg',
    '/images/pecas/o-amor-salva/15042140_1268993409841539_1135596441741350835_o.jpg',
    '/images/pecas/o-amor-salva/15042188_1269016663172547_5556478504819396636_o.jpg',
    '/images/pecas/o-amor-salva/15042214_1268992336508313_8259937374381673066_o.jpg',
    '/images/pecas/o-amor-salva/15110435_1269008263173387_8940954559650417221_o.jpg',
    '/images/pecas/o-amor-salva/15110839_1268998039841076_1481852167183557221_o.jpg',
    '/images/pecas/o-amor-salva/15128944_1269011703173043_8741268870296589213_o.jpg',
    '/images/pecas/o-amor-salva/15129076_1269022606505286_247030162064810767_o.jpg',
    '/images/pecas/o-amor-salva/15137464_1269037119837168_5417163153159321181_o.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/zIMG_20181013_172245206.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_172245206.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_174259601.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_180745204.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_181230371.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_181826507.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_181904156.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_182703906.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_182949919.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_184503245.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_185408721.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_191938675.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_192537785.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_193105582.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_194152103.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_194856116.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_200031048.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_201413334.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_201721760.jpg',
    '/images/pecas/o-amor-salva/2018-10-13-sacramento/IMG_20181013_202256286.jpg',
    '/images/pecas/o-amor-salva/17799102_1444650915608564_5532911194592489504_n.jpg',
  ];

  return (
    <>
      <Title>O Amor Salva</Title>

      <Text>
        <p>
          <strong>O AMOR SALVA</strong> aborda de maneira sutil sob a ótica da
          doutrina espírita Kardequiana,{' '}
          <strong>um tema considerado tabu</strong>, <strong>o SUICÍDIO</strong>
          , alicerçado em sub temas como Orgulho, Egocentrismo, Vaidade,
          Vingança e Obsessão.
        </p>
        <br />
        <p>
          Levando a plateia a viajar pelo tempo em 4 encarnações distintas, nas
          quais as escolhas de seus protagonistas delimita o desenrolar de suas
          histórias, ensina a todos que ninguém pode fugir à{' '}
          <strong>lei de ação e reação.</strong>
        </p>
        <br />
        <p>
          Baseando-se na história de Arlindo, um coronel arbitrário e temível do
          século XIX, que outrora na qualidade de Senhor Feudal, angariou vários
          inimigos, os quais estiveram presentes no decorrer de sua trajetória
          como coronel. O suicídio trouxe-lhe enorme sofrimento no vale sinistro
          e, após longas décadas, Arlindo recebe uma sublime chance de recomeçar
          e volta à carne como "Autista".
        </p>
        <br />
        <p>
          Embora perseguido de perto pelo seu tenaz obsessor Antony Antares,
          Arlindo sempre esteve amparado pelos Auxiliares dos Servos de Maria e
          acompanhado de perto pelos seus afetos do passado, que através de
          muita determinação e união, mostram à plateia que só{' '}
          <strong>"O AMOR SALVA"!</strong>
        </p>
        <br />
        <p>
          <strong>"O AMOR SALVA"</strong> nos ensina que, para se libertar das
          mazelas e deixar emergir a essência divina que dormita em cada um de
          nós, é necessário aprender a <strong>PERDOAR e a AMAR</strong>!
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
