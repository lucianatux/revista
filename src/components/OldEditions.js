import { Link } from "react-router-dom";
import imgOne from "../assets/img/tema1.jpg";
import imgTwo from "../assets/img/tema2.jpg";
import imgThree from "../assets/img/tema3.jpg";
import julyOne from "../assets/img/poetic.jpeg";
import julyTwo from "../assets/img/entrevista.jpg";
import julyThree from "../assets/img/listening6.jpg";
import septOne from "../assets/img/kandinsky.jpg";
import septTwo from "../assets/img/quan3.jpg";
import septThree from "../assets/img/newmirada2.jpg";
import decOne from "../assets/img/teatro2.jpg";
import decTwo from "../assets/img/time2.jpg";
import decThree from "../assets/img/body1.jpg";
import decFour from "../assets/img/magicnora2.jpg";

export const OldEditions = () => {
  return (
    <div className="old-editions-div text-dark">
      <h3>EDICIONES ANTERIORES</h3>
      <div className="old-editions">
      <div className="old-month-edition">
          <h4 className="month-title">Diciembre 2024</h4>
          <h6 className="text-light">Edición n°4</h6>
          <div className="old-articles">
            <Link to="/scene">
              <div className="elem-article-div">
                <img src={decOne} alt="" className="small-img" />
                <p>Columna El Lenguaje de las Artes: El Fenómeno Escénico</p>
              </div>
            </Link>
            <Link to="/timespace">
              <div className="elem-article-div">
                <img src={decTwo} alt="" className="small-img" />
                <p>Columna Misterios del Universo: El Tiempo y el Espacio</p>
              </div>
            </Link>
            <Link to="/body">
              <div className="elem-article-div">
                <img src={decThree} alt="" className="small-img" />
                <p>Columna Tu Cuerpo es tu mejor amigo: Fibromialgia</p>
              </div>
            </Link>
            <Link to="/magicworld">
              <div className="elem-article-div">
                <img src={decFour} alt="" className="small-img" />
                <p>Columna Espacio Integrador: El Cedazo de nuestro mundo interno</p>
              </div>
            </Link>
          </div>
        </div>
      <div className="old-month-edition">
          <h4 className="month-title">Septiembre 2024</h4>
          <h6 className="text-light">Edición n°3</h6>
          <div className="old-articles">
            <Link to="/pictorial">
              <div className="elem-article-div">
                <img src={septOne} alt="" className="small-img" />
                <p>Columna El Lenguaje de las Artes: El Fenómeno Pictórico</p>
              </div>
            </Link>
            <Link to="/quantum">
              <div className="elem-article-div">
                <img src={septTwo} alt="" className="small-img" />
                <p>Columna Misterios del Universo: El Mundo Cuántico</p>
              </div>
            </Link>
            <Link to="/newmirada">
              <div className="elem-article-div">
                <img src={septThree} alt="" className="small-img" />
                <p>Una nueva mirada</p>
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
                <p>Columna El Lenguaje de las Artes: El Fenómeno Poético</p>
              </div>
            </Link>
            <Link to="/interview">
              <div className="elem-article-div">
                <img src={julyTwo} alt="" className="small-img" />
                <p>Columna Espacio Integrador: Entrevista a Nora Gómez</p>
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
      </div>
    </div>
  );
};
