import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

function Header() {
  const user = null
  const location = useLocation()

  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
      <Container>
        <Navbar.Brand className='fw-bold fs-4'>Sabor Mexicano</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Blogs</Nav.Link>
          </Nav>
          <Nav>
            <FaUserAlt className='fs-2 my-auto mb-2 mb-md-1 mx-2' />
            {user ? <Link to='/login'><Button variant='dark'>Signout</Button></Link> : <Link to='/login'><Button variant='dark'>Login</Button></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;