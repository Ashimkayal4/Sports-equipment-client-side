import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {

    const { userLogin, setUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then((res) => {
                console.log(res)
                setUser(res.user)
            })
            .catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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