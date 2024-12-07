import { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyEquipmentList = () => {
    const data = useLoaderData();
    const [equip, SetEquip] = useState(data);
    const { user } = useContext(AuthContext);
    const email = user?.email;

    // Filter items based on the email
    const userInfo = equip.filter(item => item.email === email);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/equipments/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            fetch("http://localhost:5000/equipments")
                                .then((res) => res.json())
                                .then((updatedData) => {
                                    SetEquip(updatedData);
                                });
                        }
                    })
            }
        });
    };

    return (
        <div className="min-h-screen p-6">
            <div>
            </div>
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
                                <div className="flex justify-between">
                                    <Link to={`/update/${item._id}`} className="btn btn-neutral"><FaEdit /> Update</Link>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-neutral"><MdDelete /> Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center gap-4">
                    <p className="lg:text-2xl">No equipment found for your email.</p>
                    <Link to="/addEquipment">
                        <button className="btn btn-outline">Add your equipments</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyEquipmentList;


