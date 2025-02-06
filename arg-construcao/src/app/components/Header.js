// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>ARG</h1>
      <nav>
        <ul>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/history">História</Link></li>
          <li><Link href="/contact">Contactos</Link></li>
          <li><Link href="/properties">Apartamentos/Prédios</Link></li>
        </ul>
      </nav>
    </header>
  );
}