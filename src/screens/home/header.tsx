import styles from './header.module.css';
import logoImage from '../../assets/LogoMarca_cropped.jpeg';

export const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imageLogo} src={logoImage} />
      <nav className={styles.nav}>
        <a className={styles.navItems} href="#home">
          Home
        </a>
        <a className={styles.navItems} href="#about">
          Sobre
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=5521972782693&text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consulta%20com%20voc%C3%AAs."
          className={styles.navItems}
        >
          Agendar
        </a>
      </nav>
    </div>
  );
};
