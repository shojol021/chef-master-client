import React, { createContext, useEffect, useState } from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const emailSignUp = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailLogin = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }
    const forgotPassword = (email) => {
       return sendPasswordResetEmail(auth, email)
    }
    const googleLogin = () => {
       return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
       return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
       return signOut(auth)
    }
    const updateUser = (name, photo) => {
        updateProfile(user, {
            displayName: 'Naam', photoURL: 'Chobi'
        })
        .then(()=> {console.log('profile updated')})
        .catch(error => console.log('error hoilo', error))
        console.log('called')
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        setLoading,
        emailSignUp,
        emailLogin,
        forgotPassword,
        googleLogin,
        githubLogin,
        logOut,
        updateUser
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;