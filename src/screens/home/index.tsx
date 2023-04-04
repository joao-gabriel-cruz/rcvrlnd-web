import { Header } from './header';
import styles from './home.module.css';
import backgroundHome from '../../assets/backgroundHome.png';
import modelo1 from '../../assets/modelo1.jpeg';
import imageMaca from '../../assets/macaDeMassage2.jpeg';
import kitMassagem from '../../assets/kitMassagem.jpg';
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillGithub,
} from 'react-icons/ai';
import logoImage from '../../assets/LogoMarca_cropped.jpeg';

export const Home = () => {
  return (
    <main className={styles.container}>
      <Header />
      <section id="home" className={styles.home}>
        <div className={styles.imageBox}>
          <img className={styles.imgBackgroundHome} src={backgroundHome} />
          <div className={styles.boxInfo}>
            <h1 className={styles.title}>Recoveryland</h1>
            <p className={styles.textInfo}>Relaxar - Recuperar - Recarregar</p>
          </div>
        </div>
      </section>
      <section id="about" className={styles.about}>
        <div className={styles.boxMainInfo}>
          <p className={styles.aboutTextInfo}>
            Todo corpo precisa de ajuda às vezes. Nós entendemos a sua dor. Veja
            como podemos ajudar. Na Recoveryland acreditamos que você foi feito
            para se mover. Também entendemos que lesões podem ocorrer quando
            você menos espera. É por isso que, em nossa prática, todo plano de
            tratamento é personalizado. Dedicamos um tempo para conhecê-lo, não
            apenas como paciente, mas como pessoa.
          </p>
        </div>
        <div className={styles.boxSecondInfo}>
          <div className={styles.boxModel}>
            <img className={styles.imgModel} src={modelo1} />
          </div>
          <div className={styles.boxAbout}>
            <div className={styles.boxImage}>
              <img className={styles.imageMaca} src={imageMaca} />
            </div>
            <p className={styles.aboutTextInfo}>
              Não somos terapeutas comuns. Trabalhamos em uma nova abordagem da
              massoterapia. Chega de planos de tratamento padronizados, chega de
              "se dói, pare de fazer isso". Na Recoveryland, usamos uma
              combinação de terapia manual de ponta e técnicas de reabilitação
              para manter seu corpo se movendo da maneira que deveria.
            </p>
            <div style={{ marginTop: '20px' }} className={styles.boxImage}>
              <img className={styles.imageMaca} src={kitMassagem} />
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className={styles.footer}>
        <div>
          <img className={styles.imageLogo} src={logoImage} />
        </div>
        <div className={styles.boxFooter}>
          <AiOutlineInstagram
            onClick={() => {
              window.open('https://instagram.com/rcvrlnd?igshid=YmMyMTA2M2Y=');
            }}
            size={30}
            color="#fff"
          />
          <AiOutlineWhatsApp size={30} color="#fff" />
          <AiFillGithub
            onClick={() => {
              window.open('https://github.com/joao-gabriel-cruz/rcvrlnd-web');
            }}
            size={30}
            color="#fff"
          />
        </div>
      </footer>
    </main>
  );
};
