export const Home = () => {
  return (
    <div className="section-app" id="inicio">
      <div className="row">
        <div className="themes col-sm-12 col-md-3">
          <h3 className="indice">Indice</h3>
        </div>
      </div>
      <a href="#one">
      <div className="row menu-item">
        <div className="themes col-sm-12 col-md-3">
          <div className=" theme tema1"></div>
        </div>
        
        <div className="titles col-sm-12 col-md-4">
          El cuerpo es nuestra mayor herramienta
        </div>
      </div></a>
      <a href="#two">
      <div className="row menu-item">
        <div className="themes col-sm-12 col-md-3 ">
          <div className=" theme tema2"></div>
        </div>
        <div className="titles col-sm-12 col-md-4">
        La Forma en las Relaciones
        </div>
      </div>
      </a>
      <a href="#three" >
      <div className="row menu-item">
        <div className="themes col-sm-12 col-md-3 ">
          <div className=" theme tema3"></div>
        </div>
        <div className="titles col-sm-12 col-md-4 ">
        Una nueva sensibilidad está naciendo
        </div>
      </div>
      </a>
      <a href="#game" >
      <div className="menu-item row">
        <div className="themes col-sm-12 col-md-3 ">
          <div className=" theme tema4"></div>
        </div>
        <div className="titles col-sm-12 col-md-4 ">
          Juego de la Memoria
        </div>
      </div>
      </a>
      {/*
          <div className="row">
        <div className="themes col-sm-12 col-md-3 ">
          <div className=" theme tema1"></div>
        </div>
        <div className="titles col-sm-12 col-md-4 ">
          Agradecimientos
        </div>
      </div>
      */}
  
    </div>
  );
};
