import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  return (
    <Navbar className="container">
      <Navbar.Brand href="#" style={{ color: 'white' }}>Pizza House</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link href="#" style={{ color: 'white' }} active>
            Home
          </Nav.Link>
          <Nav.Link href="#" style={{ color: 'white' }}>About us</Nav.Link>
          <Nav.Link href="#" style={{ color: 'white' }}>Contact</Nav.Link>
        </Nav>
        <Form className="d-flex" role="search">
          <FormControl type="search" placeholder="Search" aria-label="Search" />
          <Button variant="outline-success" type="submit" className="mx-2">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
