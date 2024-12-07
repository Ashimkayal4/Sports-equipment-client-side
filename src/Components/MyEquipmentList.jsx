import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const MyEquipmentList = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const data = useLoaderData();
    console.log(data)
    const userInfo = data.filter(item => item.email === email);

    console.log(userInfo)

    

    return (
        <div className="min-h-screen">
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={userInfo?.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{ userInfo?._id}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEquipmentList;