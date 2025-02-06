import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ARG - Página Inicial</title>
      </Head>
      <Header />
      <main>
        <section>
          <h2>Sobre Nós</h2>
          <p>A ARG é uma empresa de construção civil portuguesa...</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}