import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function History() {
  return (
    <div>
      <Head>
        <title>ARG - História</title>
      </Head>
      <Header />
      <main>
        <section>
          <h2>Nossa História</h2>
          <p>A ARG foi fundada em...</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}