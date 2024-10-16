import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        {" "}
        {}
        <Container>
          <Navbar.Brand id="navele0" href="/">
            Shrihari
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="home" id="navele1" smooth={true} duration={1000}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="about" id="navele1" smooth={true} duration={1000}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="projects" id="navele2" smooth={true} duration={1000}>
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="contact" id="navele3" smooth={true} duration={1000}>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
