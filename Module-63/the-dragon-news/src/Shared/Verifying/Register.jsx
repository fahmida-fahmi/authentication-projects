import React, { useContext } from 'react';
import NavbarMenu from '../Header/NavbarMenu';

import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Auth/Context';

const Register = () => {

    const {createUser} = useContext(AuthProvider)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const password = form.password.value
        const email = form.email.value 
        const photoUrl = form.photoUrl.value 
        console.log(name,password,email,photoUrl);
        console.log(email,password);
        createUser(email,password)
        .then(result=>{
            const registerUser = result.user 
            console.log(registerUser);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className='bg-gray-100 h-screen'>
            <Container>

                <NavbarMenu></NavbarMenu>
                <Form onSubmit={handleLogin} className='bg-white mt-12 p-10 px-16 w-3/5 mx-auto'>
                    <h1 className='text-center pb-10'>Register your account</h1>
                    <div className='pt-5 px-4 border-t-2'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='font-bold'>Your Name</Form.Label>
                            <Form.Control className='p-3 bg-light' type="text" name='name' placeholder="Enter your name" required/>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='font-bold'>Photo URL</Form.Label>
                            <Form.Control className='p-3 bg-light' type="text" name='photoUrl'  placeholder="Enter Your Photo URL" required/>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='font-bold'>Email address</Form.Label>
                            <Form.Control className='p-3 bg-light' type="email" name='email' placeholder="Enter Your email Address" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='font-bold'>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" className='p-3 bg-light' required/>
                        </Form.Group>
                        <Form.Group className="" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept Term & Conditions" />
                        </Form.Group>

                        <Button variant="dark" type="submit" className='w-full my-4 rounded p-3 '>
                            <Link to='/' className='mb-0 font-semibold'>Register</Link>
                        </Button>

                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Register;