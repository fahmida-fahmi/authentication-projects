import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.config';

export const AuthProvider = createContext(null)
const auth = getAuth(app)
const Context = ({ children }) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(email,password)
    }

    const createState = () =>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    }

    const profile = () =>{
        return updateProfile(auth.currentUser, {
            displayName : user
        })
    }
    const logOut = () =>{
        return signOut(auth)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const githubSignIn = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    const authInfo = {
        createUser,
        logIn,
        user,
        loading,
        createState,
        profile,
        logOut,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
        );
};

export default Context;