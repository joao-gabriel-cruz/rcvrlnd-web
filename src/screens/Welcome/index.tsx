import img from '../../assets/logoSite.png';
import { Link } from 'react-router-dom';
import './styles.css';

export const Welcome = () => {
  return (
    <body className="bodyIndex">
      <div className="backgroundIndex">
        <div className="containerInfoIndex">
          <img src={img} />
          <p className="textIndex">Recarregue suas baterias</p>
          <p className="textIndex">Relaxe com a gente!</p>
          <Link to="/home">
            <button className="buttonIndex">Saiba mais</button>
          </Link>
        </div>
      </div>
    </body>
  );
};
