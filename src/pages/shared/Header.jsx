import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

function Header() {
  const user = useContext(AuthContext)
  const location = useLocation()

  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
      <Container>
        <Navbar.Brand className='fw-bold fs-4'><Link className='text-decoration-none text-dark' to='/'>Sabor Mexicano</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='text-decoration-none me-2 text-dark' to='/'>Home</Link>
            <Link className='text-decoration-none me-2 text-dark' to='/'>Blogs</Link>
          </Nav>
          <Nav>
            <FaUserAlt className='fs-2 my-auto mb-2 mb-md-1 mx-2' />
            {user ? <Link to='/login'><Button variant='dark'>Signout</Button></Link> : 
            location.pathname === '/login'? <Link to='/register'><Button variant='dark'>Register</Button></Link>: <Link to='/login'><Button variant='dark'>Login</Button></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;