import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [userEmail, setUserEmail] = useState('');

    const handelSubmit = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handelEmail =(event) => {
        const email = event.target.value
        setUserEmail(email)
    }

    const handelReset = () => {
        sendPasswordResetEmail(auth, userEmail )
        .then(() => {
            alert('Please check your email to reset your password')
        })
        .catch(error => console.error(error) )
    }

    return (
        <div className='w-50 mx-auto bg-light p-3 m-5 border border-danger rounded fw-semibold'>
            <h2 className='text-success text-center fw-bold'>Please Log in !!!</h2>

            <Form onSubmit={handelSubmit}>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handelEmail} name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <div className='text-center'>
                    <Button className='btn btn-success mb-3 px-3 w-25' variant="primary" type="submit">
                        Log In
                    </Button>
                    <p><small>New to the website? <Link to='/register'>Register now</Link></small></p>

                    <p className='text-danger'>
                        Forget Password?
                        <Button className='pt-0' onClick={handelReset} variant="link">Reset it</Button>
                    </p>
                </div>
            </Form>
        </div>
    );
};

export default Login;