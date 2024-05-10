export const Home = () => {
  return (
    <div className="section-app" id="inicio">
      <div className="row p-5">
        <div className="themes col-sm-12 col-md-6">
          <a href="#one" className="menu-item">
            <div className="card-theme">
              <div className="theme tema1"></div>
              <p className="subtit"> Artículo n° 1</p>
              <p className="tit">El cuerpo es nuestra mayor herramienta</p>
            </div>
          </a>
        </div>
        <div className="themes col-sm-12 col-md-6 ">
          <a href="#two" className="menu-item">
            <div className="card-theme">
              <div className=" theme tema2"></div>
              <p className="subtit"> Artículo n° 2</p>
              <p className="tit">La forma de estar vinculados en las relaciones</p>
            </div>
          </a>
        </div>
        <div className="themes col-sm-12 col-md-6">
          <a href="#three" className="menu-item">
            <div className="card-theme">
              <div className=" theme tema3"></div>
              <p className="subtit"> Artículo n° 3</p>
              <p className="tit">Una nueva sensibilidad está naciendo</p>
            </div>
          </a>
        </div>
        <div className="themes col-sm-12 col-md-6 ">
          <a href="#game" className="menu-item">
            <div className="card-theme">
              <div className=" theme tema4"></div>
              <p className="subtit"> Sección de Juegos:</p>
              <p className="tit">El juego de la memoria</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
