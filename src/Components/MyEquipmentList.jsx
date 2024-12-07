import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const MyEquipmentList = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const data = useLoaderData();

    // Filter items based on the email
    const userInfo = data.filter(item => item.email === email);

    return (
        <div className="min-h-screen p-6">
            {userInfo.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userInfo.map(item => (
                        <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img src={item.image} alt={item.item} className="w-full h-60" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.item}</h2>
                                <p>{item.description}</p>
                                <p className="font-bold">Price: ${item.price}</p>
                                <div className="card-actions justify-between">
                                    <button className="btn"><FaEdit></FaEdit> Edit</button>
                                    <button className="btn">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) :

                (
                    <>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <p className="text-2xl">No equipment found for your email.</p>
                            <Link to="/addEquipment">
                                <button className="btn btn-outline">Add your equipments</button>
                            </Link>
                        </div>
                    </>
                )}
        </div>
    );
};

export default MyEquipmentList;

