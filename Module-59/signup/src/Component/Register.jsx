import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../firebase.config';
import { Link } from 'react-router-dom';
const Register = () => {
    const auth = getAuth(app);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleForm = (event) => {
        event.preventDefault()
        setError('')
        setSuccess('')
        const email = event.target.email.value
        const name = event.target.username.value
        const pass = event.target.password.value
        console.log(email, pass, name);
        // setEmail()
        if(!/(?=.*[A-Z])/.test(pass)){
            setError('Please add at least one uppercase')
            return
        }
        else if(!/(?=.*[0-9])/.test(pass)){
            setError('Please add at least one number')
            return
        }
        else if(!/[.*+?@#%!&^${}()|[\]\\]/g.test(pass)){
            setError('Please add at least one special character')
            return
        }
        else if(pass.length<6){
            setError('Password is needed in 8 length')
            return
        }
        createUserWithEmailAndPassword (auth, email, pass, name)
        .then((result) => {
            const logInUser = result.user;
            console.log(logInUser);
            setSuccess('User has been created successfully')
            setError('')
            sendMessageForVerification(logInUser)
        })
        .catch((error) => {
            console.log(error);
        });
    }
    const sendMessageForVerification = (user) =>{
        sendEmailVerification(user)
        .then(result=>{
            console.log(result);
            alert('please verified your email')
        })
    }


    
    return (
        <div className='w-1/4 mx-auto'>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name='username' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
                <p>Already have an accoutn? Please <Link to='/login'>login</Link></p>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;