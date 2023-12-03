import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';


export const AuthContext = createContext(null)

const Context = ({ children }) => { 
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const userProfile = () =>{
        return updateProfile(auth.currentUser, {
            displayName: "Jane Q. User"
          })
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const getUser = onAuthStateChanged(auth, currentUser => {
            console.log('state change user', currentUser);
            setUser(currentUser)
            setLoading(false)
        });

        return () => {
            getUser()
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        logIn,
        userProfile,
        logOut,
        loading,
        signInWithGoogle
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default Context;