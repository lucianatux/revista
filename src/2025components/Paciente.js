import imgPictorial from "../assets/img/pictorico.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Paciente = () => {
  return (
    <div id="pictorial" className="article-div">
      <Link to="/">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <h4>Columna "Tu cuerpo es tu mejor amigo"</h4>
      <p className="article-p">
       
        <br/><br/>
      </p>
      <br />
      <h1>Relato de una paciente con fibromialgia</h1>
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
