import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './History.module.css';

export default function History() {
  return (
    <div className={styles.page}>
      <Head>
        <title>ARG - História</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.title}>A Nossa História</h2>
          <p className={styles.text}>
            A ARG foi fundada em 1975 com a missão de fornecer serviços de construção de alta qualidade. Desde o início, dedicámo-nos a entregar projetos que não apenas atendem, mas superam as expectativas dos nossos clientes. A nossa equipa é composta por profissionais altamente qualificados e experientes, que trabalham incansavelmente para garantir a satisfação total dos nossos clientes.
          </p>
          <p className={styles.text}>
            Ao longo dos anos, a ARG cresceu e expandiu-se, tornando-se uma das empresas de construção mais respeitadas da região. O nosso portfólio inclui uma ampla gama de projetos, desde pequenas reformas residenciais até grandes empreendimentos comerciais. Cada projeto é tratado com o mesmo nível de cuidado e atenção aos detalhes, independentemente do tamanho ou complexidade.
          </p>
          <p className={styles.text}>
            Em 2005, a ARG recebeu o prémio de "Empresa do Ano" pela Associação de Construtores, um reconhecimento do nosso compromisso com a excelência e a inovação. Continuamos a investir em novas tecnologias e métodos de construção para garantir que estamos sempre na vanguarda da indústria.
          </p>
          <p className={styles.text}>
            Hoje, a ARG é conhecida pela sua integridade, qualidade e compromisso com a sustentabilidade. Estamos orgulhosos do nosso legado e ansiosos por continuar a construir o futuro com os nossos clientes. Se está à procura de uma empresa de construção fiável e experiente, não procure mais. A ARG está aqui para transformar a sua visão em realidade.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}