import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Private = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    
    if (loading) {
       return <h1>hello</h1>
    }

    if (user) {
        return children;
       
    }

    return (
        <div>
            
        </div>
    );
};

export default Private;