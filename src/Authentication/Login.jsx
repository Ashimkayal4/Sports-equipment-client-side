import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const { userLogin, setUser, loginGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const googleLogin = () => {
        loginGoogle()
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err.message)
            })
   }
    

    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then((res) => {
                console.log(res)
                setUser(res.user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(location?.state ? location.state : '/')
            })
            .catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <div className="flex justify-center">
          
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="flex justify-center">
                    <button onClick={googleLogin} className="btn w-full text-green-800 text-xl"> <FaGoogle /> Google login</button>
                </div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                <div className="flex justify-center pb-2">
                    <h1>Don't have an account ? <strong className="text-red-600"><Link to="/register">Register</Link></strong></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;