// src/app/page.tsx
import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ARG - Página Inicial</title>
        <meta name="description" content="Bem-vindo à ARG, empresa de construção civil portuguesa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="main">
        <h1 className="title">
          Bem-vindo à <a href="#">ARG</a>
        </h1>

        <p className="description">
          A ARG é uma empresa de construção civil portuguesa...
        </p>

        <div className="grid">
          <a href="/history" className="card">
            <h2>História &rarr;</h2>
            <p>Saiba mais sobre a nossa história.</p>
          </a>

          <a href="/contact" className="card">
            <h2>Contactos &rarr;</h2>
            <p>Entre em contato conosco.</p>
          </a>

          <a href="/properties" className="card">
            <h2>Apartamentos/Prédios &rarr;</h2>
            <p>Veja nossos projetos.</p>
          </a>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          padding: 0 2rem;
        }

        .main {
          min-height: 100vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        .description {
          text-align: center;
          margin: 4rem 0;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}