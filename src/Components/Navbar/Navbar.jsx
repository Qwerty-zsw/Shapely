import { BiSearch } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";

const Header = () => {
  return (
    <>
      <Navbar bg="black" variant="w-100 dark">
        <Container className="w-70 p-1">
<<<<<<< HEAD
          <Navbar.Brand className="ms-5 mb-2 text-muted Brnd fs-4" href="#">Shapely Demo</Navbar.Brand>
=======
          <Navbar.Brand className="ms-5 text-muted" href="#">Shapely Demo</Navbar.Brand>
>>>>>>> e021adb4452247e7f629a45fd5a1d60e4e90b461
          
          <Nav className="w-100 d-flex justify-content-end me-4 align-items-center gap-3">

            <Nav.Link className="text-light fs-8" href="#">HOME</Nav.Link>
            <Nav.Link className="text-light fs-8" href="#">BLOG</Nav.Link>
            <Nav.Link className="text-light fs-8" href="#">PORTFOLIO</Nav.Link>

            <NavDropdown className="fs-8 cusDrop text-light" title="ABOUTTHETESTS" id="basic-nav-dropdown">
              <NavDropdown.Item className="text-light" href="#">Actions</NavDropdown.Item>
              <NavDropdown.Item className="text-light" href="#">Actions</NavDropdown.Item>
              <NavDropdown.Item className="text-light" href="#">Actions</NavDropdown.Item>
              <NavDropdown.Item className="text-light" href="#">Actions</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="text-light cusDrop fs-8" title="LEVEL1" id="basic-nav-dropdown">
              <NavDropdown.Item className="text-light" href="#">Actions</NavDropdown.Item>
              <NavDropdown.Item className="text-light" href="#">Actions</NavDropdown.Item>
              <NavDropdown.Item className="text-light" href="#">Actions</NavDropdown.Item>
              <NavDropdown.Item className="text-light" href="#">Actions</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="text-light fs-8" href="#">SHOP</Nav.Link>

            <Nav.Link className="ms-3 textColr" href="#">
              <BiSearch />
            </Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
