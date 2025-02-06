import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand}>ARG</Link>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Início</Link>
            <Link href="/history" className={styles.navLink}>História</Link>
            <Link href="/contact" className={styles.navLink}>Contactos</Link>
            <Link href="/properties" className={styles.navLink}>Apartamentos/Prédios</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}