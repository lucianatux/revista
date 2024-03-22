import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import logo from "../assets/img/ojo9.png";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="header">
      <div className="first-header">
        <img src={logo} className="img-fluid logo" alt="Logo" />
        <p className="phrase">La atención yace en nosotros</p>
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
          Revista digital<span className="mx-2 name">El Ojo Cuántico</span>
        </p>
        <Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto tabs">
              <Nav.Link href="#inicio" className="text-light" >Inicio</Nav.Link>
              <Nav.Link href="#tema1"  className="text-light">Tema 1</Nav.Link>
              <Nav.Link href="#tema2"  className="text-light">Tema 2</Nav.Link>
              <Nav.Link href="#tema3" className="text-light" >Tema 3</Nav.Link>
            </Nav>
          </Navbar.Collapse> 
      </Navbar>
      </div>
      <hr></hr>
    </div>
  );
};
