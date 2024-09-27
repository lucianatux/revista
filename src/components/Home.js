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
          <Link to="/newmirada">
            <div className="card-theme">
              <div className=" theme tema3"></div>
              <p className="subtit">Artículo n° 3</p>
              <p className="tit">Una nueva mirada. La crisis personal, un reflejo de lo social</p>
            </div>
          </Link>
        </div>
        <div className="themes col-sm-12 col-md-6 ">
          <Link to="/jump">
            <div className="card-theme">
              <div className=" theme tema4"></div>
              <p className="subtit"> Nuevo Juego:</p>
              <p className="tit">El Juego de Saltar</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
