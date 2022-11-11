import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';


const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleJoin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubJoin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const facebookJoin = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }
    const updateUser = (profile) => updateProfile(auth.currentUser, profile);
    const resetPassword = email => sendPasswordResetEmail(auth, email);
    const logOut = () => {
        localStorage.removeItem('token');
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])







    const sendItems = { user, setUser, loading, setLoading, register, login, facebookJoin, googleJoin, githubJoin, logOut, updateUser, resetPassword };
    return (
        <AuthContext.Provider value={sendItems}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;