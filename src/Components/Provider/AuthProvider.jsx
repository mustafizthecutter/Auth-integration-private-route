import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // observe auth state change*************

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current state change of current user', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }

    }, [])

    // observe auth state change*************

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         console.log('observing current user inside useEffect of AuthProvider', currentUser);
    //     });
    //     return () => {
    //         unSubscribe();
    //     }
    // }, [])
    const authInfo = { user, createUser, signInUser, logOut, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;