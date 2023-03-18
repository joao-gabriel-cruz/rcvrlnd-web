import img from '../../assets/logoSite.png';
import './styles.css';

export const Welcome = () => {
  return (
    <body className="bodyIndex">
      <div className="backgroundIndex">
        <div className="containerInfoIndex">
          <img src={img} />
          <p className="textIndex">Recarregue suas baterias</p>
          <p className="textIndex">Relaxe com a gente!</p>
          <a href="about\index.html">
            <button className="buttonIndex">Saiba mais</button>
          </a>
        </div>
      </div>
    </body>
  );
};
