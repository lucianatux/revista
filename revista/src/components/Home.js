export const Home = () => {
  return (
    <div className="section-app" id="inicio">
      
      <div className="row">
        <div className="themes col-sm-12 col-md-6">
          <a href="#one" className="menu-item">
            <div className=" theme tema1"></div>
          </a>
        </div>
        <div className="themes col-sm-12 col-md-6 ">
          <a href="#two" className="menu-item">
            <div className=" theme tema2"></div>
          </a>
        </div>
        <div className="themes col-sm-12 col-md-6">
          <a href="#three" className="menu-item">
            <div className=" theme tema3"></div>
          </a>
        </div>
        <div className="themes col-sm-12 col-md-6 ">
          <a href="#game" className="menu-item">
            <div className=" theme tema4"></div>
          </a>
        </div>
      </div>

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
