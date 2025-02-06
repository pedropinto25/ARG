import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ARG - Página Inicial</title>
        <meta name="description" content="Bem-vindo à ARG, empresa de construção civil portuguesa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo à <a href="#">ARG</a>
        </h1>

        <p className={styles.description}>
          A ARG é uma empresa de construção civil portuguesa...
        </p>

        <div className={styles.grid}>
          <a href="/history" className={styles.card}>
            <h2>História &rarr;</h2>
            <p>Saiba mais sobre a nossa história.</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h2>Contactos &rarr;</h2>
            <p>Entre em contato conosco.</p>
          </a>

          <a href="/properties" className={styles.card}>
            <h2>Apartamentos/Prédios &rarr;</h2>
            <p>Veja nossos projetos.</p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}