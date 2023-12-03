import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qzone1 from './assets/qZone1.png'
import qzone2 from './assets/qZone2.png'
import qzone3 from './assets/qZone3.png'
import bg from './assets/bg.png'
import { AuthProvider } from '../Auth/Context';

const RightNav = () => {

    const {googleSignIn,githubSignIn} = useContext(AuthProvider)

    const googleLogIn = () =>{

        googleSignIn()
        .then(result =>{
            const logIn = result.user 
            console.log(logIn);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const githubLogIn = () =>{
        githubSignIn()
        .then(result=>{
            const logIn = result.user 
            console.log(logIn);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button onClick={googleLogIn} variant="outline-primary" className='px-5 mt-4 w-full'> <FaGoogle className='inline me-2 text-2xl' />  Log in with Google</Button>
                <Button onClick={githubLogIn} variant="outline-dark" className='px-5 my-3 w-full'> <FaGithub className='inline me-2 text-2xl' />  Log in with Github</Button>
            </div>
            <div className='mt-5'>
                <h4 className='mb-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='py-3 flex items-center'><FaFacebook className='inline rounded-full  bg-gray-100  text-primary me-2 text-2xl' /><span className='h5'>Facebook</span></ListGroup.Item>
                    <ListGroup.Item className='py-3 flex items-center'><FaTwitter className='inline rounded-full  bg-gray-100  text-info me-2 text-2xl' /><span className='h5'>Facebook</span></ListGroup.Item>
                    <ListGroup.Item className='py-3 flex items-center'><FaInstagram className='inline rounded-full  bg-gray-100  text-danger me-2 text-2xl' /><span className='h5'>Facebook</span></ListGroup.Item>


                </ListGroup>
            </div>
            <div className='mt-4 bg-gray-100 p-4'>
                <h4>Q-Zone</h4>
                <div >
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" className='my-4' />
                    <img src={qzone3} alt="" />
                </div>
            </div>
            <div className='mt-5 relative text-white'>
                <img className='w-full' src={bg} alt="" />
                {/* <div className=''> */}

                    <div className='absolute top-0 text-center my-40 mx-4 justify-center'>
                        
                        <h1>Create an Amazing Newspaper</h1>
                        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <Button className='btn-danger py-3 px-5 rounded-0 flex items-center'>Learn More</Button>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default RightNav;