import { getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase.config';
const Login = () => {
    const auth = getAuth(app);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef()

    const handleForm = (event) => {
        event.preventDefault()
        setError('')
        setSuccess('')
        const email = event.target.email.value
        const pass = event.target.password.value
        console.log(email, pass);
        // setEmail()
        signInWithEmailAndPassword (auth, email, pass)
        .then((result) => {
            const logInUser = result.user;
            console.log(logInUser);
            setSuccess('User has been created successfully')
            setError('')
        })
        .catch((error) => {
            console.log(error);
        });
    }
    const handleResetPassword = () =>{
         const email = emailRef.current.value
         console.log(email);
         if(!email){
            alert('please enter email address for resetting password')
            return
         }
         sendPasswordResetEmail(auth, email)
         .then(()=>{
            alert('please ck ur email')
         })
         .catch(error=>{
            setError(error.message)
         })
    }
    
    
    return (
        <div className='w-1/4 mx-auto'>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" ref={emailRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <p>Forget password? please <button className='btn btn-link' onClick={handleResetPassword}>Reset password</button></p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>New in here? Please <Link to='/register'>Register</Link></p>
                
                <p className='text-success'>{success}</p>
                    
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;