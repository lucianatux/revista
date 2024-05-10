import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import logo from "../assets/img/ojo9.png";
import logo2 from "../assets/img/ojo99a.png";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="header">
      <div className="div-header">
        <div className="logo-container m-2">
          <img src={logo} className="logo" alt="Logo" />
          <img src={logo2} className="logo2" alt="Logo2" />
        </div>
        <div className="m-2">
          <h3 className="elojocuantico">El Ojo Cuántico</h3>
          <p className="text-light magazine">Revista digital de divulgación</p>
        </div>
        <Navbar expand="lg" className="justify-content-center">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-body-tertiary mx-4"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center">
              <Nav.Link href="#inicio" className="tabs">
                Inicio
              </Nav.Link>
              <Nav.Link href="#aboutus" className="tabs">
                Nuestro propósito
              </Nav.Link>
              <Nav.Link href="#workshops" className="tabs">
                Talleres
              </Nav.Link>
              <Nav.Link href="#contact" className="tabs">
                Contacto
              </Nav.Link>
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
