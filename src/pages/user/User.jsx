import { useContext, useState } from 'react';
import { Container, Modal, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

function User() {
  const { user, changeEmail } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdateProfile = () => {
    //firebase update profile logic goes here
    updateProfile(user, {
        displayName: name
    })

    changeEmail(email)
    .then(() => console.log('email changed'))

    console.log(`Updating profile with name=${name} and email=${email}`);
    setShowModal(false);
  };

  return (
    <Container className='my-3'>
      <Card className="text-center">
        <Card.Header>User Details</Card.Header>
        <div className='d-flex'>
          <Card.Body className='col-md-3'>
            <Card.Img className='w-50' src={user?.photoURL && user.photoURL} />
          </Card.Body>
          <Card.Body>
            <Card.Title>{user?.displayName && user.displayName}</Card.Title>
            <Card.Text>
              {user?.email && user.email}
            </Card.Text>
            <Button variant="dark" onClick={() => setShowModal(true)}>Update Profile</Button>
          </Card.Body>
        </div>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateProfile}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default User;
