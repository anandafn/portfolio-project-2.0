import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import socialIcon1 from "../assets/images/nav-icon1.svg";
import socialIcon2 from "../assets/images/nav-icon2.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className={`${scroll ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          <span className="logo">ANANDAFN</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={`${
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }`}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`${
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }`}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={`${
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }`}
              onClick={() => onUpdateActiveLink("portfolio")}
            >
              Portfolios
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ananda-fitri-namira/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={socialIcon1} alt="" />
              </a>
              <a
                href="https://github.com/anandafn"
                target="_blank"
                rel="noreferrer"
              >
                <img src={socialIcon2} alt="" />
              </a>
            </div>
            <a
              className="cta"
              href="https://drive.google.com/file/d/1Yl5PP6t0_XDhN75FulMKyrVWltrjrCrJ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <span>My Resume</span>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
