import { Link } from "react-router-dom";
import imgOne from "../assets/img/tema1.jpg";
import imgTwo from "../assets/img/tema2.jpg";
import imgThree from "../assets/img/tema3.jpg";
import julyOne from "../assets/img/poetic.jpeg";
import julyTwo from "../assets/img/entrevista.jpg";
import julyThree from "../assets/img/listening6.jpg";

export const OldEditions = () => {
  return (
    <div className="old-editions-div text-dark">
      <h3>EDICIONES ANTERIORES</h3>
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
          </div>
        </div>
        <div className="old-month-edition">
          <h4 className="month-title">Julio 2024</h4>
          <h6 className="text-light">Edición n°2</h6>
          <div className="old-articles">
            <Link to="/poetic">
              <div className="elem-article-div">
                <img src={julyOne} alt="" className="small-img" />
                <p>Columna El Lenguaje de las Artes. Artículo: El Fenómeno Poético</p>
              </div>
            </Link>
            <Link to="/interview">
              <div className="elem-article-div">
                <img src={julyTwo} alt="" className="small-img" />
                <p>Columna Espacio Integrador. Artículo: Entrevista a Nora Gómez</p>
              </div>
            </Link>
            <Link to="/listening">
              <div className="elem-article-div">
                <img src={julyThree} alt="" className="small-img" />
                <p>Escuchar de verdad</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
