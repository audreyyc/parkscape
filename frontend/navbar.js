import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">ParkScape</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Parks</Nav.Link>
                    <Nav.Link href="#airports">Airports</Nav.Link>
                    <Nav.Link href="#cities">Cities</Nav.Link>
                </Nav>
        </Container>
    </Navbar>
  );
}

export default NavBar;