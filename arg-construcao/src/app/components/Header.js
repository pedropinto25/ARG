import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <nav className={`navbar navbar-expand-lg ${styles.customNavbar}`}>
        <div className="container">
          <Link href="/" className={`navbar-brand ${styles.brand}`}>ARG</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${styles.navLink}`}>Início</Link>
              </li>
              <li className="nav-item">
                <Link href="/history" className={`nav-link ${styles.navLink}`}>História</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link ${styles.navLink}`}>Contactos</Link>
              </li>
              <li className="nav-item">
                <Link href="/properties" className={`nav-link ${styles.navLink}`}>Apartamentos/Prédios</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}