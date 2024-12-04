import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    
    // login user
    const userLogin = (email, password) => {
       return signInWithEmailAndPassword(auth,email,password)
    }

    // google login
    const provider = new GoogleAuthProvider();
    const loginGoogle = () => {
        return signInWithPopup(auth, provider).then(res => {
            console.log(res);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 1500
            });
        })
            .catch(err => {
            console.log(err.message)
        })
    }

    // signOut user
    const logOut = () => {
        return signOut(auth).then(res => {
            console.log(res)
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "LogOut successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch(err => {
            console.log(err.message)
        })
        
    }

    const authInfo = {
        userLogin,
        createUser,
        setUser,
        user,
        logOut,
        loginGoogle,
        setLoading,
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