import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {
        user,
        loading,
        emailSignUp,
        emailLogin,
        forgotPassword,
        googleLogin,
        githubLogin
    } = useContext(AuthContext)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

    }

    const handleGoogLogin = () => {
        googleLogin()
        .then(res => {
            const user = res.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }
    const handleGithubLogin = () => {
        githubLogin()
        .then(res => {
            const user = res.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    return (
        <Form className='w-25 mx-auto mt-3' onSubmit={handleLogin}>
            <h3>Please Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Text className="text-muted">
                <p className='mb-3'>{success}</p>
                <p className='mb-3'>{error}</p>
                <p className='mb-3 btn-link'>Fogot password?</p>
            </Form.Text>
            <Button variant="dark" type="submit">
                Submit
            </Button>
            <Form.Text className="text-muted">
                <div className='d-flex justify-content-center align-items-center my-2'>
                    <span>New to Sabor Maxicano? </span>
                    <span><Link to='/register' className=' btn btn-link'>Sign up here</Link></span>
                </div>
            </Form.Text>

            <div className='bg-warning d-flex justify-content-center align-items-center'>Or login with
                <span onClick={handleGoogLogin} className='mx-2 fs-3 text-success btn my-2'><FaGoogle></FaGoogle></span>
                <span onClick={handleGithubLogin} className='fs-3 text-dark btn my-2'><FaGithub></FaGithub></span>
            </div>


        </Form>
    );
};

export default Login;