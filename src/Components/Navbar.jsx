import { Link, NavLink } from "react-router-dom";
import logo from '../assets/360_F_302128359_q6aCwgAvdYZBPF4XSwxXddLPE0h3Kor1.jpg'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    const links = (
        <div className="gap-4 lg:flex">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/allSports">All Sports Equipment</NavLink>
            </li>
            {
                user && <li>
                    <NavLink to="/addEquipment">Add Equipment</NavLink>
                </li>
            }
            {
                user && <li>
                    <NavLink to="/myEquipmentList">My Equipment List</NavLink>
                </li>
           }
        </div>
    )

    const signOut = () => {
        logOut()
            .then(res => {
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

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                         {links}
                        </ul>
                    </div>
                    <img className="w-20 h-20" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="px-1">
                      {links}
                    </ul>
                </div>
                <div className="navbar-end">
              
                    {
                        user && <>
                            <h1>{user.email }</h1>
                            <button onClick={signOut} className="btn ml-2">LogOut</button>
                        </>
                        
                    }
              
                    {
                        !user && <>
                            <Link to="/login" className="btn">Login</Link>
                        
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;