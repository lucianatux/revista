import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import logo from "../assets/img/ojo9.png";
import logo2 from "../assets/img/ojo99a.png";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="div-header">
        <div className="logo-container">
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
            className="bg-body-tertiary mx-2"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center">
              <Nav.Link as={Link} to="/" className="tabs">
                Inicio
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle className="tabs" variant="dark" id="dropdown-basic">
                  Acerca de nosotros
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/aboutus">
                    Nuestro propósito
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/workshops">
                    Talleres
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/contact">
                    Contáctanos
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link as={Link} to="/oldeditions" className="tabs">
                Más
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
                    href="https://www.facebook.com/profile.php?id=100079068583763"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={navIcon4} alt="facebook-icon" />
                  </a>
                </div>
              </span>
              <p className="text-light magazine">Edición n°2 Julio 2024</p>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
