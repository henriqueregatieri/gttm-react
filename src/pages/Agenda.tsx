import { Text } from '../components/Text';
import { Title } from '../components/Title';

export const Agenda = () => {
  return (
    <>
      <Title>Agenda</Title>
      <Text>
        <div className='text-center'>
          <p>Em breve, novas datas!</p>
          <br />
          <p>
            Últimas apresentações de <strong>O Amor Salva</strong>:
          </p>
        </div>
        <br />

        <div className='display-flex flex-1'>
          <div className='leading-loose px-32'>
            30/11/2019 &#8211; São Paulo/SP &#8211; Federação Espírita do Estado
            de São Paulo
            <br />
            26/10/2019 &#8211; São Paulo/SP &#8211; Colégio Dom Pedro
            <br />
            22/09/2019 &#8211; São Paulo/SP &#8211; Casa Transitória
            <br />
            07/04/2019 &#8211; Jundiaí/SP &#8211; Teatro Polytheama
            <br />
            13/10/2018 &#8211; Sacramento/MG
            <br />
            23/09/2018 &#8211; São Bernardo do Campo/SP &#8211; Instituição
            Assistencial Meimei
            <br />
            26/07/2018 &#8211; São Paulo/SP &#8211; Federação Espírita do Estado
            de São Paulo
            <br />
            26/05/2018 &#8211; São Paulo/SP &#8211; Federação Espírita do Estado
            de São Paulo
            <br />
            21/04/2018 &#8211; Indaiatuba/SP
            <br />
            17/03/2018 &#8211; Araraquara/SP &#8211; CEAR &#8211; Centro de
            Eventos (FACIRA)
            <br />
            28/10/2017 &#8211; Louveira/SP
            <br />
            19/08/2017 &#8211; São Paulo/SP &#8211; CCA Casa do Cristo Redentor
          </div>
        </div>
      </Text>
    </>
  );
};
