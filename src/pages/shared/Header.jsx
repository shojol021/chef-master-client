import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import './shared.css'

function Header() {
  const { user, logOut } = useContext(AuthContext)
  const location = useLocation()

  const handleLogOut = () => {
    logOut()
      .then(res => console.log('SignedOut'))
  }


  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light" fixed='top'>
      <Container>
        <Navbar.Brand className='fw-bold fs-4'><Link className='text-decoration-none text-dark' to='/'>Sabor Mexicano</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='text-decoration-none me-2 text-dark' to='/'>Home</Link>
            <Link className='text-decoration-none me-2 text-dark' to='/'>Blogs</Link>
          </Nav>
          <Nav>

            {user ? <><img className='img-size rounded me-2' src={user.photoURL} data-toggle="tooltip" data-placement="left" title={user.displayName} alt="" /><Link to='/login'><Button onClick={handleLogOut} variant='dark'>Signout</Button></Link></> :
              location.pathname === '/login' ?
              <><FaUserAlt className='fs-2 my-auto mb-2 mb-md-1 mx-2' /><Link to='/register'><Button variant='dark'>Register</Button></Link></> :
              <><FaUserAlt className='fs-2 my-auto mb-2 mb-md-1 mx-2' /><Link to='/login'><Button variant='dark'>Login</Button></Link></>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;