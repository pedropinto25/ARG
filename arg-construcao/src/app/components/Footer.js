import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>&copy; 2025 ARG. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}