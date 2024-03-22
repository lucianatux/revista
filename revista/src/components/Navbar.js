import {useState, useEffect} from "react";
import {Navbar, Nav} from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon5.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import logo from '../assets/img/ojo9.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
  
    return(
      <div>
<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Navbar.Brand href="/" className="mx-3 brand d-flex align-items-center">
            <img src={logo} className="img-fluid logo" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Tema 1</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Tema 2</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Tema 3</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contáctanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
      </Navbar>
      <Navbar>
      <p className="text-light title">Revista digital<span className="mx-2 name">El Ojo Cuántico</span></p>

      </Navbar>
      </div>
        
    )
}
