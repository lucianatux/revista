import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <div className="footer-div">
      <div className="mx-4">
        <h3 className="elojocuantico">El Ojo Cuántico</h3>
        <p className="text-light magazine">Revista digital de divulgación</p>
        <p className="p-3 text-light magazine"> Edición n°2  Julio 2024</p>
      </div>
      <div className="row mx-2 text-center">
        <div className="col-12 col-sm-auto">
          <p className="p-3"> Gracias por visitarnos! </p>
        </div>
        <div className="col-sm-auto p-3">
          <div className="social-icon">
            <a
              href="https://www.youtube.com/@elojocuantico-espaciocreat4572"
              target="_blank"
              rel="noreferrer"
            >
              <img src={navIcon5} alt="youtube-icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100079068583763"
              target="_blank"
              rel="noreferrer"
            >
              <img src={navIcon4} alt="facebook-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
