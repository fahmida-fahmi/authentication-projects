import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import { app } from '../../Firebase/firebase';


const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider()
    const handleGoogleAuth = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const logInuUser = result.user
                console.log(logInuUser);
                setUser(logInuUser)
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then((result) => {
                console.log(result);
                setUser(null)
            }).catch((error) => {
                console.log(error);
            });
    }
    const handleGitLogIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user)
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <div>
                        <button onClick={handleGitLogIn}>Github Login</button>
                        <button onClick={handleGoogleAuth}>google login </button>
                    </div>
            }
            {user &&
                <div>
                    <h1>User: {user.displayName}</h1>
                    <h1>Email: {user.email}</h1>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;