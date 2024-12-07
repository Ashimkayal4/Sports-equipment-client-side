import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // login user
    const userLogin = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    // google login
    const provider = new GoogleAuthProvider();
    const loginGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // signOut user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)     
    }

    const authInfo = {
        userLogin,
        createUser,
        setUser,
        user,
        logOut,
        loginGoogle,
        setLoading,
        loading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;