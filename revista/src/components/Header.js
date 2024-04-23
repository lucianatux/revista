import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import logo from "../assets/img/ojo9.png";
import logo2 from "../assets/img/ojo99a.png";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="header">
      <div className="first-header">
        <div className="logo-container mx-5">
          <img src={logo} className="logo" alt="Logo" />
          <img src={logo2} class="logo2" alt="Logo2" />
        </div>
        <p className="phrase"></p>
        <span className="header-text">
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
        </span>
      </div>
      <div className="second-header">
        <p className="text-light title">
          Revista digital de divulgación
        </p>
        <Navbar expand="md">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-body-tertiary mx-5"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#inicio" className="text-light tabs">
                Inicio
              </Nav.Link>
              <Nav.Link href="#aboutus" className="text-light tabs">
                Quiénes somos
              </Nav.Link>
              <Nav.Link href="#workshops" className="text-light tabs">
                Talleres
              </Nav.Link>
              <Nav.Link href="#acknowledgements" className="text-light tabs">
                Agradecimientos
              </Nav.Link>
              <Nav.Link href="#contact" className="text-light tabs">
                Contacto
              </Nav.Link>
              <Nav.Link href="#usefullinks" className="text-light tabs">
                Enlaces útiles
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
