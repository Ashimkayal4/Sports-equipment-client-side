import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, setUser, loginGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate()
    const googleLogin = () => {
        loginGoogle()
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Registration  successfully",
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
    
        const form = e.target
    
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const valid = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;
        if (!valid.test(password)) {
            console.log("Invalid password");
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                setUser(res.user)
            })
            .catch(error => {
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
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className="flex justify-center pb-2">
                    <h1>Already have an account ? <strong className="text-red-600"><Link to="/login">Login</Link></strong></h1>
                </div>
            </div>
        </div>
    );
};

export default Register;