import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation();
    
    if (loading) {
        return <>
            <div className="flex min-h-screen justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </>
    }

    if (user) {
        return children; 
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Private;