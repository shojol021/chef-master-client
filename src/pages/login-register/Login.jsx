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

        emailLogin(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
            })
            .catch(error => console.log(error))

    }

    const handleGoogLogin = () => {
        googleLogin()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
            })
            .catch(error => console.log(error))
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
            })
            .catch(error => console.log(error))
    }


    return (
        <Form className='w-25 mx-auto border p-3 my-5' onSubmit={handleLogin}>
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

            <div className='bg-warnig text-center'>
                <Button onClick={handleGoogLogin} variant="outline-success" className='w-100 my-2'><FaGoogle className='me-2'></FaGoogle>Login with Google</Button><br />
                <Button onClick={handleGithubLogin} variant="outline-dark" className='w-100 my-2'><FaGithub className='me-2'></FaGithub>Login with Github</Button>
            </div>


        </Form>
    );
};

export default Login;