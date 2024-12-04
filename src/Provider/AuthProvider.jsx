import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    
    const userLogin = (email, password) => {
       return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        userLogin,
        createUser,
        setUser,
        user,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
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