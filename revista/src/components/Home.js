import { Link } from "react-router-dom";
import { Phrases } from "./Phrases";

export const Home = () => {
  return (
    <div className="section-app">
      <Phrases />
      <div className="row p-5">
        <div className="themes col-sm-12 col-md-6">
          <Link to="/poetic">
            <div className="card-theme">
              <div className=" theme tema1"></div>
              <p className="subtit">Artículo n° 1</p>
              <p className="section-tit">Columna: El Lenguaje de las Artes</p>
              <p className="tit">El fenómeno poético</p>
            </div>
          </Link>
        </div>
        <div className="themes col-sm-12 col-md-6 ">
          <Link to="/interview">
            <div className="card-theme">
              <div className=" theme tema2"></div>
              <p className="subtit"> Artículo n° 2</p>
              <p className="section-tit">Columna: Espacio Integrador</p>
              <p className="tit">Entrevista a Nora Gómez</p>
            </div>
          </Link>
        </div>
        <div className="themes col-sm-12 col-md-6">
          <Link to="/listening">
            <div className="card-theme">
              <div className=" theme tema3"></div>
              <p className="subtit">Artículo n° 3</p>
              <p className="tit">Escuchar de verdad</p>
            </div>
          </Link>
        </div>
        <div className="themes col-sm-12 col-md-6 ">
          <Link to="/wordle">
            <div className="card-theme">
              <div className=" theme game-wordle"></div>
              <p className="subtit"> Sección de Juegos:</p>
              <p className="tit">Nuestro Wordle</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
