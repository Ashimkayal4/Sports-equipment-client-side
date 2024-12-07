import { useLoaderData, useParams } from "react-router-dom";

const HomeDetails = () => {
    const { id } = useParams();

    const data = useLoaderData();
    const product = data.find(service => service._id === id);
    return (
        <div className="min-h-screen">
            <div>
                <img src={product.image} className="" alt="" />
            </div>
            <div className="flex justify-between gap-2">
                <div>
                    <h1>Item name:{product.item}</h1>
                    <h1>Price:{product.price}</h1>
                    <h1>Stock:{product.stock}</h1>
                    <h1>Extra grip :{product.extraGrip }</h1>
                </div>
                <div>
                    <h1>Category:{product.category}</h1>
                    <h1>Rating :{product.rating}</h1>
                    <h1>Delivery time :{product.time}</h1>
                    <h1>Hit paper :{ product.hitPaper}</h1>
                </div>
            </div>
            <div>
                <h1>Description:{ product.description}</h1>
            </div>
        </div>
    );
};

export default HomeDetails;