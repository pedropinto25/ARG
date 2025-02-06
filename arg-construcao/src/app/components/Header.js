// src/app/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/" className="navbar-brand">ARG</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">Início</Link>
              </li>
              <li className="nav-item">
                <Link href="/history" className="nav-link">História</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">Contactos</Link>
              </li>
              <li className="nav-item">
                <Link href="/properties" className="nav-link">Apartamentos/Prédios</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}