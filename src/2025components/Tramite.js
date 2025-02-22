import imgPictorial from "../assets/img/pictorico.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Tramite = () => {
  return (
    <div id="pictorial" className="article-div">
      <Link to="/">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <h4>Columna "Espacio Integrador"</h4>
      <p className="article-p">
       
        <br/><br/>
      </p>
      <br />
      <h1>El Trámite</h1>
      <br />
      <img src={imgPictorial} alt="" className="article-img2" />

      <p className="article-p">
       
        <br/><br/>
        <br/><br/>
        
        <br/><br/>
        <br/><br/>
        
      </p>

      <hr />
    </div>
  );
};
