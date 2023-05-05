import React, { useContext, useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import './login.css'

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const emailField = useRef()

    const {
        emailLogin,
        forgotPassword,
        googleLogin,
        githubLogin,
        setLoading
    } = useContext(AuthContext)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const from = location.state?.from.pathname || '/';

    const handleLogin = (event) => {
        setError('')
        setSuccess('')
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        emailLogin(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                navigate(from)
            })
            .catch(error => {
                setLoading(false)
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setError("Provided wrong email or password")
                }
                else if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setError("Sign up first or try login with Google, Github")
                }
                else{
                    setError(error.message)
                }
            })

    }

    const handleGoogLogin = () => {
        googleLogin()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                navigate(from)
            })
            .catch(error => setError(error))
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                navigate(from)
            })
            .catch(error => setError(error))
    }

    const handleResetPassword = (e) => {
        setError('')
        setSuccess('')
        const email = emailField.current.value;
        forgotPassword(email)
            .then(() => {
                setSuccess(`Password reset email sent to ${email}`)
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    return (
        <Form className='form-width mx-auto border p-3 my-5' onSubmit={handleLogin}>
            <h3>Please Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailField} type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Text className="text-muted">
                <p className='mb-3 text-success'>{success}</p>
                <p className='mb-3 text-danger'>{error}</p>
                <p onClick={handleResetPassword} className='mb-3 btn-link'>Fogot password?</p>
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