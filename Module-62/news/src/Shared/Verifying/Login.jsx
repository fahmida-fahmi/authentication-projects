import React, { useContext } from 'react';
import NavbarMenu from '../Header/NavbarMenu';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Context from '../../AuthProvider/Context';

const Login = () => {

    const {logIn} = useContext(Context)
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        logIn(email,password)
        .then(result => {
            const logInUser = result.user
            console.log(logInUser);
        })
        .catch(error=>{
            console.log(error);
        })


    }
    return (
        <div className='bg-gray-100 h-screen'>
            <Container>
                <NavbarMenu></NavbarMenu>
                <Form onSubmit={handleLogin} className='bg-white mt-20 p-20 w-3/5 mx-auto'>
                    <h1 className='text-center pb-12'>Login your account</h1>
                    <div className='pt-5 px-4 border-t-2'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='font-bold'>Email address</Form.Label>
                            <Form.Control className='p-3 bg-light' type="email" name='email' placeholder="Enter Your email Address" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='font-bold'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' className='p-3 bg-light' />
                        </Form.Group>

                        <Button variant="dark" type="submit" className='w-full my-4 rounded p-3'>
                            <p className='mb-0 font-semibold'>Login</p>
                        </Button>
                        <div className='text-center'>

                            <p className='font-semibold'>Don’t Have An Account ? <Link to='/register' className='text-orange-400 no-underline'>Register</Link> </p>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Login;   