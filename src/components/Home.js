import { Link } from "react-router-dom";
import { Phrases } from "./Phrases";

export const Home = () => {
  return (
    <div className="section-app">
      <Phrases />
      <div className="row p-5">
        <div className="themes col-sm-12 col-md-6">
          <Link to="/scene">
            <div className="card-theme">
              <div className=" theme tema1"></div>
              <p className="subtit">Artículo n° 1</p>
              <p className="section-tit">Columna: El Lenguaje de las Artes</p>
              <p className="tit">El Fenómeno Musical</p>
            </div>
          </Link>
        </div>
        <div className="themes col-sm-12 col-md-6 ">
          <Link to="/timespace">
            <div className="card-theme">
              <div className=" theme tema2"></div>
              <p className="subtit"> Artículo n° 2</p>
              <p className="section-tit">Columna: Creadores de Mundos</p>
              <p className="tit">Invitación especial</p>
            </div>
          </Link>
        </div>
        <div className="themes col-sm-12 col-md-6">
          <Link to="/body">
            <div className="card-theme">
              <div className=" theme tema3"></div>
              <p className="subtit">Artículo n° 3</p>
              <p className="section-tit">Columna: Tu cuerpo es tu mejor amigo</p>
              <p className="tit">Relato de una paciente con fibromialgia</p>
            </div>
          </Link>
        </div>
        <div className="themes col-sm-12 col-md-6 ">
          <Link to="/magicworld">
            <div className="card-theme">
              <div className=" theme tema4"></div>
              <p className="subtit"> Artículo n° 4:</p>
              <p className="section-tit">Columna: Espacio Integrador</p>
              <p className="tit">El Trámite</p>
            </div>
          </Link>
        </div>
        <div className="themes col-sm-12 col-md-6 ">
          <Link to="/magicworld">
            <div className="card-theme">
              <div className=" theme tema5"></div>
              <p className="subtit"> Artículo n° 5:</p>
              <p className="section-tit">Columna: Cuentos cortos</p>
              <p className="tit">El Misil energético</p>
            </div>
          </Link>
        </div>
        <div className="themes col-sm-12 col-md-6 ">
          <Link to="/simon">
            <div className="card-theme">
              <div className=" theme tema6"></div>
              <p className="subtit"> Nuevo Juego:</p>
              <p className="tit">Simón dice</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
