import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <div className="footer-div">
      <div className="m-2">
        <h3 className="elojocuantico">El Ojo Cuántico</h3>
        <p className="text-light magazine">Revista digital de divulgación</p>
      </div>
      <p className="mx-5"> Edición n°1 | Mayo 2024</p>
      <p className="mx-5"> Gracias por visitarnos! </p>
      <div className="social-icon">
        <a
          href="https://www.youtube.com/@elojocuantico-espaciocreat4572"
          target="_blank"
          rel="noreferrer"
        >
          <img src={navIcon5} alt="youtube-icon" />
        </a>
        <a
          href="https://www.facebook.com/groups/410686510468952/user/100079068583763/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={navIcon4} alt="facebook-icon" />
        </a>
      </div>
    </div>
  );
};
