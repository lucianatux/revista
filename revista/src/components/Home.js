export const Home = () => {
  return (
    <div className="section-app" id="inicio">
      <div className="row">
        <div className="themes col-sm-12 col-md-3">
          <h3 className="indice">Indice</h3>
        </div>
      </div>
      <a href="#one" className="text-light">
      <div className="row">
        <div className="themes col-sm-12 col-md-3">
          <div className=" theme tema1"></div>
        </div>
        
        <div className="titles col-sm-12 col-md-9">
          El cuerpo es nuestra mayor herramienta
        </div>
      </div></a>
      <a href="#two" className="text-light">
      <div className="row">
        <div className="themes col-sm-12 col-md-3 ">
          <div className=" theme tema2"></div>
        </div>
        <div className="titles col-sm-12 col-md-9">
        Explorando Nuevas Formas de Organización y Vida
        </div>
      </div>
      </a>
      <a href="#three" className="text-light">
      <div className="row">
        <div className="themes col-sm-12 col-md-3 ">
          <div className=" theme tema3"></div>
        </div>
        <div className="titles col-sm-12 col-md-9 ">
        Una nueva sensibilidad está naciendo
        </div>
      </div>
      </a>
      <a href="#game" className="text-light">
      <div className="row">
        <div className="themes col-sm-12 col-md-3 ">
          <div className=" theme tema4"></div>
        </div>
        <div className="titles col-sm-12 col-md-9 ">
          Juego de la Memoria
        </div>
      </div>
      </a>
      <div className="row">
        <div className="themes col-sm-12 col-md-3 ">
          <div className=" theme tema1"></div>
        </div>
        <div className="titles col-sm-12 col-md-9 ">
          Agradecimientos
        </div>
      </div>
    </div>
  );
};
