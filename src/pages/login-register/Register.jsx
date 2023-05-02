import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [accept, setAccept] = useState(false)

    const checkBox = () => {

    }

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }

    return (
        <Form className='w-25 mx-auto mt-3' onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Enter photo url" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Text className="text-muted">
                <p className='mb-3'>{success}</p>
                <p className='mb-3'>{error}</p>
            </Form.Text>
            <Button variant="dark" type="submit">
                Submit
            </Button>
            <Form.Text className="text-muted">
                <p className='mt-3'>Already have an account? <Link to='/login' className='btn btn-link'>Login here</Link></p>
            </Form.Text>
        </Form>
    );
};

export default Register;