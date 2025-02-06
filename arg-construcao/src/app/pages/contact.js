import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>ARG - Contactos</title>
      </Head>
      <Header />
      <main>
        <section>
          <h2>Formulário de Contacto</h2>
          <form action="#" method="post">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}