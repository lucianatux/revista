import { Link } from "react-router-dom";
import imgOne from "../assets/img/tema1.jpg";
import imgTwo from "../assets/img/tema2.jpg";
import imgThree from "../assets/img/tema3.jpg";
import memoryGame from "../assets/img/memo4.jpg";

export const OldEditions = () => {
  return (
    <div className="old-editions-div text-dark">
      <h1>Ediciones anteriores</h1>
      <div className="old-editions">
        <div className="old-month-edition">
          <h4 className="month-title">Mayo 2024</h4>
          <h6 className="text-light">Edición n°1</h6>
          <div className="old-articles">
            <Link to="/one">
              <div className="elem-article-div">
                <img src={imgOne} alt="" className="small-img" />
                <p>El cuerpo es nuestra mayor herramienta</p>
              </div>
            </Link>
            <Link to="/two">
              <div className="elem-article-div">
                <img src={imgTwo} alt="" className="small-img" />
                <p>La forma de estar vinculados en las relaciones</p>
              </div>
            </Link>
            <Link to="/three">
              <div className="elem-article-div">
                <img src={imgThree} alt="" className="small-img" />
                <p>Una nueva sensibilidad está naciendo</p>
              </div>
            </Link>
            <Link to="/memory-game">
              <div className="elem-article-div">
                <img src={memoryGame} alt="" className="small-img" />
                <p>El Juego de la Memoria</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
