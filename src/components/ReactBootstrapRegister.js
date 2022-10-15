import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app)



function ReactBootstrapRegister() {

    const [passwordError, setPasswordError] = useState('')
    const [success, setSuccess] = useState(false)


    const handelRegister = event => {
        event.preventDefault()
        setSuccess(false)
        const form = event.target

        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide atLeast Two Uppercase letter')
            return
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please provide atLeast one special character')
            return
        }
        if (password.length < 6) {
            setPasswordError('Please provide atLeast six character')
            return
        }
        else {
            setPasswordError('')
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess(true)
                form.reset()
                verifyEmail()
                updateName(name)
            })
            .catch(error => {
                console.error(error)
                setPasswordError(error.message)
            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            alert('Please check your email and verify it!!')
        })
    }

    const updateName =(name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(() => console.log('name updated'))
        .catch(error => console.error(error))
    }


    return (
        <div className='w-50 mx-auto my-5 p-3 bg-light rounded fw-semibold border  border-primary'>
            <h2 className='text-danger text-center'>Please Register !!!</h2>

            <Form onSubmit={handelRegister}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {
                    success && <p className='text-success'>User added successfully</p>
                }

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p><small>Already have an account? Please<Link to ='/login'> Log in</Link></small></p>
            </Form>
        </div>
    );
}

export default ReactBootstrapRegister;

