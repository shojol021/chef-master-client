import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const { emailSignUp } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [accept, setAccept] = useState(false)

    const navigate = useNavigate()

    const checkBox = (e) => {
        const isChecked = e.target.checked;
        setAccept(isChecked)
    }

    const handleRegister = (event) => {
        setError('')
        setSuccess('')
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const password2 = form.password2.value;

        if (password.length < 6) {
            setError('At least 6 characters')
            return
        }
        if (!(password === password2)) {
            setError("Password didn't match")
            return
        }

        emailSignUp(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                setSuccess('Successfully registered, please login now')
                form.reset()
                updateProfile(loggedUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => { 
                        navigate('/')
                        
                    })
                    .catch(error => setError(error.message))
            })
            .catch(error => {
                console.log(error.message)
                if (error.code === 'auth/email-already-in-use') {
                    setError(`${email} is already in use, please login instead.`)
                }
            })
    }

    return (
        <Form className='w-25 mx-auto my-5 border p-3' onSubmit={handleRegister}>
            <h3>Please Register</h3>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
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

            <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password2' placeholder="Confirm Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={checkBox} type="checkbox" label={<>Accept <Link to='/terms' className='btn-link'>Terms & Condition</Link></>} />
            </Form.Group>
            <Form.Text className="text-muted">
                <p className='mb-3 text-success'>{success}</p>
                <p className='mb-3 text-danger'>{error}</p>
            </Form.Text>
            <Button variant="dark" type="submit" disabled={!accept}>
                Submit
            </Button>
            <Form.Text className="text-muted">
                <div className='d-flex justify-content-center align-items-center my-2'>
                    <span>Already have an account? </span>
                    <span><Link to='/login' className=' btn btn-link'>Login here</Link></span>
                </div>
            </Form.Text>
        </Form>
    );
};

export default Register;