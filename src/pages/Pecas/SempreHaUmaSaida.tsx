import { PhotoGallery } from 'components/PhotoGallery';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

export const SempreHaUmaSaida: React.FC = () => {
  const images = [
    '/images/pecas/sempre-ha-uma-saida/Imagem2.jpg',
    '/images/pecas/sempre-ha-uma-saida/Imagem3.jpg',
    '/images/pecas/sempre-ha-uma-saida/Imagem4.jpg',
    '/images/pecas/sempre-ha-uma-saida/Imagem5.jpg',
    '/images/pecas/sempre-ha-uma-saida/Imagem6.jpg',
  ];

  return (
    <>
      <Title>Sempre Há Uma Saída</Title>

      <Text>
        <p>
          <strong>Tema:</strong> Gravidez precoce, aborto, drogas, AIDS.
        </p>
        <br />
        <p>
          <strong>Período em cartaz: </strong>2001 / 2002.
        </p>
        <br />
        <p>
          A trama se desenvolve de maneira simples e envolvente, descrita por
          uma "Narradora Astral". É uma história cotidiana, de uma família de
          nossos dias bastante desestruturada, com um pai alcoólatra, mãe
          desinformada e perdida, por conseqüência, filhos trilhando por
          caminhos totalmente controvertidos.
        </p>
        <br />
        <p>
          Enfocando a influência dos dois planos espirituais, Superior (Equipe
          dos Raiozinhos de Sol) e Inferior (Funesta e seu Grupo), surge então
          na trajetória da jovem de apenas 15 anos, Beatriz, nossa Bia, a
          inesperada e indesejada "gravidez" e com ela a idéia negativa do
          aborto, projetando o sofrimento e desespero do "Espírito Reencarnante"
          e mais, envolvimento com "drogas", "AIDS" e muitos outros
          desencontros.
        </p>
        <br />
        <p>
          Enfim, através da incansável colaboração dos abnegados irmãos do mundo
          maior, da fé e depois de alguns resgates, nossos protagonistas
          encontram seu caminho, mas cada qual, segundo seu livre arbítrio.
        </p>
        <br />
        <p>
          Evidencia claramente e alerta a família, que ela ainda é o seio da
          sociedade, é no lar que germinam os princípios básicos para a
          estruturação do "ser"; e aos jovens para serem mais responsáveis com
          suas atitudes e escolhas, porque a semeadura é livre, porém a colheita
          é obrigatória.
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
