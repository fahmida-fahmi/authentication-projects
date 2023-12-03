import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const Register = () => {
    const {createUser,userProfile,signInWithGoogle} = useContext(AuthContext)
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        console.log(email,password,name);

        createUser(email,password)
        .then(result=>{
            const logInUser = result.user
            console.log(logInUser);
        })
        .catch(error=>{
            console.log(error);
        })

        userProfile()
        .then(()=>{
            
            console.log('profile updated');
        })
        .catch(error=>{
            console.log(error);
        })

    }
    const handleGoogle = () =>{
        signInWithGoogle()
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
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold ">Login now!</h1>
                    </div>
                    <div><button className='btn btn-secondary' onClick={handleGoogle}>Sign in with Google</button></div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' />
                                <label className="label">
                                Already have an account?please <Link to='/login' className="label-text-alt link link-hover">login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;