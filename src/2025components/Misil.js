import imgPictorial from "../assets/img/pictorico.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Misil = () => {
  return (
    <div id="pictorial" className="article-div">
      <Link to="/">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <h4>Columna "Cuentos cortos"</h4>
      <p className="article-p">
       
        <br/><br/>
      </p>
      <br />
      <h1>Misil</h1>
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
