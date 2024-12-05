import { useLoaderData, useParams } from "react-router-dom";

const HomeDetails = () => {
    const { id } = useParams();

    const data = useLoaderData();
    const product = data.find(service => service._id === id);
    return (
        <div className="min-h-screen">
            <div>
                <img src={product.image} alt="" />
            </div>
        </div>
    );
};

export default HomeDetails;