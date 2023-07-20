import { Title } from '../components/Title';

export const Contato: React.FC = () => {
  return (
    <div className='text-center'>
      <Title>Contato</Title>

      <div className='text-3xl mb-12'>Venha fazer parte dessa família!!!</div>

      {/*<p>
        Nossos ensaios ocorrem na: Rua Demóstenes, 834 &#8211; Sala 38 &#8211;
        Campo Belo &#8211; São Paulo/SP
        <br />
        Todos os Sábados &#8211; Horário: 13:00 até as 16:30 &#8211; Exceto nos
        meses de Julho / Dezembro e Janeiro
      </p>*/}

      <p>
        Para contato, dúvida ou agendamento de apresentações,
        <br />
        contate-nos pelo e-mail{' '}
        <a href='mailto:gttm.digital@gmail.com' style={{ color: 'dodgerblue' }}>
          gttm.digital@gmail.com
        </a>
        <br />
        ou com o Sr. Eraldo pelos telefones: (11) 99244-5061 / (11) 5816-3675.
      </p>
    </div>
  );
};
