import { PhotoGallery } from 'components/PhotoGallery';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

export const Peninha: React.FC = () => {
  const images = [
    '/images/pecas/peninha/DSC01796.JPG',
    '/images/pecas/peninha/IMG_20131117_101457_035.jpg',
    '/images/pecas/peninha/9e828dd43e8733c85b0df52f023217fa.jpg',
    '/images/pecas/peninha/17_08_2008 074.jpg',
    '/images/pecas/peninha/17_08_2008 075.jpg',
    '/images/pecas/peninha/17_08_2008 076.jpg',
    '/images/pecas/peninha/17_08_2008 077.jpg',
    '/images/pecas/peninha/17_08_2008 078.jpg',
    '/images/pecas/peninha/17_08_2008 083.jpg',
    '/images/pecas/peninha/17_08_2008 084.jpg',
    '/images/pecas/peninha/17_08_2008 085.jpg',
    '/images/pecas/peninha/17_08_2008 086.jpg',
    '/images/pecas/peninha/17_08_2008 087.jpg',
    '/images/pecas/peninha/17_08_2008 088.jpg',
    '/images/pecas/peninha/17_08_2008 089.jpg',
    '/images/pecas/peninha/17_08_2008 090.jpg',
    '/images/pecas/peninha/17_08_2008 091.jpg',
    '/images/pecas/peninha/17_08_2008 092.jpg',
    '/images/pecas/peninha/17_08_2008 095.jpg',
    '/images/pecas/peninha/DSC00673.JPG',
    '/images/pecas/peninha/DSC00680.JPG',
    '/images/pecas/peninha/DSC01799.JPG',
    '/images/pecas/peninha/DSC01807.JPG',
    '/images/pecas/peninha/DSC01811.JPG',
    '/images/pecas/peninha/DSC04035.JPG',
    '/images/pecas/peninha/DSC04036.JPG',
    '/images/pecas/peninha/DSC04037.JPG',
    '/images/pecas/peninha/DSC04041.JPG',
    '/images/pecas/peninha/DSC04042.JPG',
    '/images/pecas/peninha/Imagem 020.jpg',
    '/images/pecas/peninha/Imagem 082.jpg',
    '/images/pecas/peninha/IMG_0986.JPG',
    '/images/pecas/peninha/IMG_1007.JPG',
    '/images/pecas/peninha/IMG_1031.JPG',
    '/images/pecas/peninha/IMG_1036.JPG',
    '/images/pecas/peninha/IMG_1037.JPG',
    '/images/pecas/peninha/IMG_2404.JPG',
    '/images/pecas/peninha/IMG_2406.JPG',
    '/images/pecas/peninha/IMG_2409.JPG',
    '/images/pecas/peninha/IMG_2410.JPG',
    '/images/pecas/peninha/IMG_2415.JPG',
    '/images/pecas/peninha/IMG_2418.JPG',
    '/images/pecas/peninha/IMG_2420.JPG',
    '/images/pecas/peninha/IMG_2422.JPG',
    '/images/pecas/peninha/IMG_2423.JPG',
    '/images/pecas/peninha/IMG_2424.JPG',
    '/images/pecas/peninha/IMG_2426.JPG',
    '/images/pecas/peninha/IMG_2428.JPG',
    '/images/pecas/peninha/IMG_2432.JPG',
    '/images/pecas/peninha/IMG_2444.JPG',
    '/images/pecas/peninha/IMG_2445.JPG',
    '/images/pecas/peninha/IMG_2446.JPG',
    '/images/pecas/peninha/IMG_2447.JPG',
    '/images/pecas/peninha/IMG_2450.JPG',
    '/images/pecas/peninha/IMG_2451.JPG',
    '/images/pecas/peninha/IMG_2453.JPG',
    '/images/pecas/peninha/IMG_2454.JPG',
    '/images/pecas/peninha/IMG_2467.JPG',
    '/images/pecas/peninha/IMG_2468.JPG',
    '/images/pecas/peninha/IMG_2471.JPG',
    '/images/pecas/peninha/IMG_2472.JPG',
    '/images/pecas/peninha/IMG_2478.JPG',
    '/images/pecas/peninha/IMG_2483.JPG',
    '/images/pecas/peninha/IMG_2488.JPG',
    '/images/pecas/peninha/IMG_2491.JPG',
    '/images/pecas/peninha/IMG_2493.JPG',
    '/images/pecas/peninha/IMG_2496.JPG',
    '/images/pecas/peninha/IMG_2503.JPG',
    '/images/pecas/peninha/IMG_2504.JPG',
    '/images/pecas/peninha/IMG_2506.JPG',
    '/images/pecas/peninha/IMG_2509.JPG',
    '/images/pecas/peninha/IMG_2515.JPG',
    '/images/pecas/peninha/IMG_2516.JPG',
    '/images/pecas/peninha/IMG_2520.JPG',
    '/images/pecas/peninha/IMG_2522.JPG',
    '/images/pecas/peninha/IMG_2523.JPG',
    '/images/pecas/peninha/IMG_2524.JPG',
    '/images/pecas/peninha/IMG_2529.JPG',
    '/images/pecas/peninha/IMG_2533.JPG',
    '/images/pecas/peninha/IMG_2535.JPG',
    '/images/pecas/peninha/IMG_2537.JPG',
    '/images/pecas/peninha/IMG_2552.JPG',
    '/images/pecas/peninha/IMG_2554.JPG',
    '/images/pecas/peninha/IMG_2559.JPG',
    '/images/pecas/peninha/IMG_2562.JPG',
    '/images/pecas/peninha/IMG_2563.JPG',
    '/images/pecas/peninha/IMG_2564.JPG',
    '/images/pecas/peninha/IMG_2574.JPG',
    '/images/pecas/peninha/IMG_2575.JPG',
    '/images/pecas/peninha/IMG_2579.JPG',
    '/images/pecas/peninha/IMG_2583.JPG',
    '/images/pecas/peninha/IMG_2584.JPG',
    '/images/pecas/peninha/IMG_2585.JPG',
    '/images/pecas/peninha/IMG_2589.JPG',
    '/images/pecas/peninha/IMG_2590.JPG',
    '/images/pecas/peninha/IMG_2593.JPG',
    '/images/pecas/peninha/IMG_2599.JPG',
    '/images/pecas/peninha/IMG_2600.JPG',
    '/images/pecas/peninha/IMG_2610.JPG',
    '/images/pecas/peninha/IMG_2618.JPG',
    '/images/pecas/peninha/IMG_2623.JPG',
    '/images/pecas/peninha/IMG_2645.JPG',
    '/images/pecas/peninha/IMG_2647.JPG',
    '/images/pecas/peninha/IMG_2651.JPG',
    '/images/pecas/peninha/IMG_2654.JPG',
    '/images/pecas/peninha/IMG_2655.JPG',
    '/images/pecas/peninha/IMG_2658.JPG',
    '/images/pecas/peninha/IMG_2659.JPG',
    '/images/pecas/peninha/IMG_2667.JPG',
  ];

  return (
    <>
      <Title>Peninha, O Fantasminha Medroso</Title>

      <Text>
        Tema: Verdadeiros tesouros.
        <br />
        <br />
        Período em cartaz: 2000.
        <br />
        <br />A peça infantil Peninha, o fantasminha medroso é uma adaptação da
        célebre obra "Pluft, o fantasminha".
        <br />
        <br />
        Personagens extrovertidos e alegres, transformam o palco numa fantasia
        colorida e divertida, onde a platéia infantil, entre sorrisos e
        surpresas vai aos poucos descobrindo quais são os verdadeiros tesouros
        que o ser humano deve cultivar.
        <br />
        <br />
        Toda a trama se desenrola numa casinha branca, perto de um mar verde,
        onde mora Peninha e sua família (todos fantasmas).
        <br />
        <br />
        Peninha é um menino muito medroso, tem medo de gente (encarnados) e faz
        amizade com Isabel, que foi raptada pela hilariante dupla, o "Capitão
        Perna de Pau" e seu auxiliar, o debochado "Braço Mole".
        <br />
        <br />
        Os dois estão atrás do "tesouro" deixado pelo avô de Isabel, o "Capitão
        Bonança Arco Íris", e que está escondido na tal casinha branca.
      </Text>
      <br />
      <br />

      <div className='mx-64'>
        <PhotoGallery images={images} />
      </div>
    </>
  );
};
